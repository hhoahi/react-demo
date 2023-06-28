import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Tokyo", "Ha Noi", "London", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="City" />
    </div>
  );
}

export default App;
