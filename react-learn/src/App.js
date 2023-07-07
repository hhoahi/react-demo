import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-content">
        <Outlet />
      </div>
      <Counter />
    </div>
  );
}

export default App;
