import Table from '@/components/Table';

export default function Home() {
  const column = [1,2,3];
  const row = [1,2,3,4];
  const data = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
  ]
  return (
    <main>
      <div>
        <Table column={column} row={row} data={data}></Table>
      </div>
    </main>
  );
}
