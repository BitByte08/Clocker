'use client'
import {useState, useEffect} from "react";

type Props = {
  column : number[],
  row: number[]
}
export default function Table(props:Props) {
  const [columns, setColumns] = useState<number[]>(props.column);
  const [rows, setRows] = useState<number[]>(props.row);
  return (
    <div>
      <main>
        <table>
          <tbody>
          {columns.map((item, index) => (
            <tr key={index}>
              {rows.map((item, index) => (
                <td key={index}>
                  11
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
