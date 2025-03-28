import Table from '@/components/Table';
import range from "@/functions/range";

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
    <main>
      <div>
        <Table column={column} row={row} data={data} />
      </div>
    </main>
  );
}
