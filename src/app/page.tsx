import Table from '../components/Table.tsx';

export default function Home() {
  const column = [1,2,3];
  const row = [1,2,1,2];
  return (
    <main>
      <Table column={column} row={row}></Table>
    </main>
  );
}
