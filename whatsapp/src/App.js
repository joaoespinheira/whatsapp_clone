import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <div className="app__body">
        <Sidebar />
        {/*chat*/}
      </div>
    </div>
  );
}

export default App;
