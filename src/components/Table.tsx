'use client'
import {useState, useEffect} from "react";
import {TableProps} from "@/Type";

export default function Table(props:TableProps) {
  const [columns, setColumns] = useState<number[]>(props.column);
  const [rows, setRows] = useState<number[]>(props.row);
  const [data, setData] = useState<number[][]>(props.data);
  return (
    <div>
      <main>
        <table border={1}>
          <tbody>
          {columns.map((item1, index) => (
            <tr key={index}>
              {rows.map((item2, index2) => (
                <td key={index2+index}>
                  {data[index][index2]}
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
