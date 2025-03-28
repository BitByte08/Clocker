'use client'
import {useState, useEffect} from "react";
import type {TableProps} from "@/Type";

export default function Table(props:TableProps) {
  const [columns, setColumns] = useState<number[]>(props.column);
  const [rows, setRows] = useState<number[]>(props.row);
  const [data, setData] = useState<number[][]>(props.data);
  return (
    <div>
      <main>
        <table border={1}>
          <tbody>
          {columns.map((item1, index1) => (
            <tr key={index1}>
              {rows.map((item2, index2) => (
                <td key={index2}>
                  {data[index1][index2]}
                </td>
              ))
              }
            </tr>
          ))
          }
          </tbody>
        </table>
      </main>
    </div>
  );
}
