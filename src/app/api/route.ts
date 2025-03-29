import {NextResponse} from "next/server";
import type {TableProps} from "@/Type";
import range from '@/functions/range'

export async function GET(){
  const data:TableProps = {
    column : 5,
    row : 5,
    data : [range(0,5),range(5,10),range(10,15),range(15,20),range(20,25)]
  }
  return NextResponse.json(data);
}