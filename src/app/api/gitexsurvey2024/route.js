import { NextResponse,NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const GET = async (req, res) => {
    try {
        
        return  NextResponse.json({message:'successful'},{ status: 200 })
    }
    catch (error) {
        return  NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
};

export const POST = async (req, res) => {
    try{
        const requestBody = await req.text();
        // If the content type is JSON, you can parse it
        const requestJson=JSON.parse(requestBody)
        const newData=await prisma.gitexsurvey2024.create({
            data:requestJson
        })
        return NextResponse.json({message:"Data Added Successfully"},{status:201})      
    }
    catch(error){
        return  NextResponse.json({message:"Internal server error"},{status:500})
    }
};

