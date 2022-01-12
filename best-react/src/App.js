import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expense = [
    { date: "2022-01-21", title: "New Desk (Wooden)", amount: 450 },
  ];
  return (
    <div>
      <ExpenseItem
        date={expense[0].date}
        title={expense[0].title}
        amount={expense[0].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
