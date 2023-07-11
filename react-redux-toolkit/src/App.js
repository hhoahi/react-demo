import Counter from "./features/counter/Counter";
import Header from "./component/layout/header";
import Slide from "./component/layout/slidebar";
function App({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="slidebar">
          <Slide />
        </div>
        <div className="content">
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default App;
