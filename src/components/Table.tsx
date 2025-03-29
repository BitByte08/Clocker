'use client'
import {useEffect, useState} from "react";
import type {TableProps} from "@/Type";
import components from './components.module.css';
import range from "@/functions/range";

export default function Table(props:TableProps) {
  const [columns, setColumns] = useState<number>(0);
  const [rows, setRows] = useState<number>(0);
  const [datas, setDatas] = useState<number[][]>(props.data);
  useEffect(() => {
    setColumns(props.column);
    setRows(props.row);
    setDatas(props.data);
  }, [props])
  return (
    <table className={components.timetable}>
      <tbody>
      {range(0,columns).map((item1, index1) => (
        <tr key={index1}>
          {range(0,rows).map((item2, index2) => (
            <td key={index2}>
              {datas[index1][index2]}
            </td>
          ))
          }
        </tr>
      ))
      }
      </tbody>
    </table>
  );
}
