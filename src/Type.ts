import React from "react";

type TableProps = {
  column : number,
  row: number,
  data: number[][]
}
type ToolBoxProps = {
  children: React.PropsWithChildren<React.ReactNode>|undefined,
  TabClass : string|undefined,
  LineClass : string|undefined
}
export type {TableProps, ToolBoxProps};