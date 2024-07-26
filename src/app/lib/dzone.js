import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { dataParser } from '@/app/middleware/dataParser';


export const addData=async(tablename,data)=>{
    try{
        
        const newData = await prisma[tablename].create({
            data: data
        });
       
        return newData;
    }
    catch(e){
        console.log(e)
        throw new Error(`Failed to add Data to dzone ${tablename}`)
    }
}





