import Table from "./components/Table/Table";

const netIncomes = [
  { brand: "McDonalds", income: 1291283 },
  { brand: "Burger King", income: 1927361 },
  { brand: "KFC", income: 1098463 },
];

function App() {
  return (
    <>
      <Table netIncomes={netIncomes} />
    </>
  );
}

export default App;
