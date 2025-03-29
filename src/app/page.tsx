import Table from '@/components/Table';
import range from "@/functions/range";
import page from "./page.module.css";
import "./global.css";

export default function Home() {
  const column = range(0,5);
  const row = range(0,5);
  const data = [
    range(0,5),
    range(5,10),
    range(10,15),
    range(15,20),
    range(20,25)
  ]
  return (
    <main className={page.main}>

      <article className={page.timetableContainer}>
        <Table column={column} row={row} data={data} />
      </article>
    </main>
  );
}
