import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const POST = async (req, res) => {
    try {
        const requestBody = await req.text();
        // If the content type is JSON, you can parse it
        const requestJson = JSON.parse(requestBody)
        const ip = req.headers.get('x-forwarded-for') || req.connection.remoteAddress;
        // Fetch geolocation data based on the IP address
        const geoResponse = await axios.get(`https://ipapi.co/${ip}/json/`);
        const geoLocation = geoResponse.data;



        // Extract user agent details
        const userAgent = req.headers['user-agent'];

        // Capture additional tracking details
        const deviceType = /mobile/i.test(userAgent) ? 'Mobile' : 'Desktop';
        const browserDetails = userAgent.match(/(firefox|msie|chrome|safari|trident)/i) || [];
        const browserName = browserDetails[0];
        const screenResolution = req.headers['screen-resolution'] || 'Unknown';
        const timezone = req.headers['timezone'] || 'Unknown';
        const referralURL = req.headers['referer'] || 'Direct';



        // Add IP and geolocation data to the request
        requestJson.ip = geoLocation.ip;
        requestJson.geolocation = geoLocation;
        requestJson.useragent = userAgent;
        requestJson.devicetype = deviceType;
        requestJson.browsername = browserName;
        requestJson.screenresolution = screenResolution;
        requestJson.timezone = timezone;
        requestJson.referralurl = referralURL;
        const newData = await prisma.pokerstars.create({
            data: requestJson
        })
        return NextResponse.json({ message: "Data Added Successfully" }, { status: 201 })
    }
    catch (error) {
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
};



