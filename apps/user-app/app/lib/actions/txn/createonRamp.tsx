"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "../../auth"
import prisma from "@repo/db/client";
export const onRampTxn=async(provider:string,amount:number)=>{
   const token= Math.random.toString()
     const user=await getServerSession(authOptions);
     const result=await prisma.onRampTransaction.create({
        data:{
    status: "Processing",
    token,
    provider,
    amount: Number(amount),
    startTime: new Date(),
    userId: Number(user?.user?.id)
        }
     });

     return{
        message: "done"
     }
     
}