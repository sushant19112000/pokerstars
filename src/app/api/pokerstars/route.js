// import { NextResponse, NextRequest } from "next/server";
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// export const POST = async (req, res) => {
//     try {
//         const requestBody = await req.text();
//         console.log(requestBody)
//         // If the content type is JSON, you can parse it
//         const requestJson = JSON.parse(requestBody)
//         const ip = req.headers.get('x-forwarded-for') || req.connection.remoteAddress;
//         // Fetch geolocation data based on the IP address
//         const geoResponse = await axios.get(`https://ipapi.co/${ip}/json/`);
//         const geoLocation = geoResponse.data;



//         // Extract user agent details
//         const userAgent = req.headers['user-agent'];

//         // Capture additional tracking details
//         const deviceType = /mobile/i.test(userAgent) ? 'Mobile' : 'Desktop';
//         const browserDetails = userAgent.match(/(firefox|msie|chrome|safari|trident)/i) || [];
//         const browserName = browserDetails[0];
//         const screenResolution = req.headers['screen-resolution'] || 'Unknown';
//         const timezone = req.headers['timezone'] || 'Unknown';
//         const referralURL = req.headers['referer'] || 'Direct';



//         // Add IP and geolocation data to the request
//         requestJson.ip = geoLocation.ip;
//         requestJson.geolocation = geoLocation;
//         requestJson.useragent = userAgent;
//         requestJson.devicetype = deviceType;
//         requestJson.browsername = browserName;
//         requestJson.screenresolution = screenResolution;
//         requestJson.timezone = timezone;
//         requestJson.referralurl = referralURL;
//         const newData = await prisma.pokerstars.create({
//             data: requestJson
//         })
//         return NextResponse.json({ message: "Data Added Successfully" }, { status: 201 })
//     }
//     catch (error) {
//         return NextResponse.json({ message: "Internal server error" }, { status: 500 })
//     }
// };

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export const POST = async (req) => {
  try {
    // Parse the JSON request body
    const requestJson = await req.json();

    // Extract IP address (use a default for local testing if needed)
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';

    // Fetch geolocation data based on the IP address
  
    const geoLocation = "geolocation"

    // Extract user agent details
    const userAgent = req.headers.get('user-agent') || 'Unknown';
    const deviceType = /mobile/i.test(userAgent) ? 'Mobile' : 'Desktop';
    const browserDetails = userAgent.match(/(firefox|msie|chrome|safari|trident)/i) || [];
    const browserName = browserDetails[0] || 'Unknown';
    const screenResolution = req.headers.get('screen-resolution') || 'Unknown';
    const timezone = req.headers.get('timezone') || 'Unknown';
    const referralURL = req.headers.get('referer') || 'Direct';

    // Add IP and geolocation data to the request
    const enrichedData = {
      ...requestJson,
      ip: geoLocation.ip || 'Unknown',
      geolocation: geoLocation,
      useragent: userAgent,
      devicetype: deviceType,
      browsername: browserName,
      screenresolution: screenResolution,
      timezone: timezone,
      referralurl: referralURL
    };

    // Save data to the database
    await prisma.pokerstars.create({
      data: enrichedData
    });

    return NextResponse.json({ message: "Data Added Successfully" }, { status: 201 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
};



