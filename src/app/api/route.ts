import {NextResponse} from "next/server";
import type {TableProps} from "@/Type";

export async function GET(){
  const data:TableProps = {
    column : 5,
    row : 5,
    data : [[]]
  }
  return NextResponse.json(data);
}