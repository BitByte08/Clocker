'use client';
import {useState, useEffect} from "react";
import type {TableProps} from "@/Type";
import Table from '@/components/Table';
import ToolBox from "@/components/ToolBox";
import page from "./page.module.css";
import "./global.css";
import {getTimeTable} from "@/services/TimeTableService";

export default function Home() {
  const [columns, setColumns] = useState<number>(0)
  const [rows, setRows] = useState<number>(0);
  const [datas, setDatas] = useState<number[][]>([[]]);
  const getTimeTableData = async () => {
    const data:TableProps = await getTimeTable();
    setColumns(data.column)
    setRows(data.row)
    setDatas(data.data)
  }
  useEffect(() => {
    getTimeTableData();
  }, []);
  return (
    <main className={page.main}>
      <article className={page.timetableContainer}>
        <Table column={columns} row={rows} data={datas}/>
      </article>
      <ToolBox TabClass={page.leftTab} LineClass={page.leftTabLine}>
          <h1>dfaa</h1>
      </ToolBox>
      <ToolBox TabClass={page.bottomTab} LineClass={page.bottomTabLine}>
        <h1>dfaa</h1>
      </ToolBox>
    </main>
  );
}
