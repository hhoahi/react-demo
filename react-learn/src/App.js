import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Header />
      </div>

      {/* Outlet chỉ có thể được sử dụng trong một component duy nhất.  
      Outlet thường được sử dụng trong các component cha của các route, 
      nội dung của các route con sẽ được hiển thị trong phần nội dung chính của component cha đó*/}
      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
