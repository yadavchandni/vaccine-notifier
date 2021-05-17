import logo from "./logo.svg";
import "./App.css";
import NavBar from "./compoents/navbar";
import DashBoard from './compoents/dashboard/index'


function App() {
  return (
    <div className="App">
      {/* ================================ Navbar ======================================= */}
      <NavBar />
      {/* ================================ Dashboard ======================================= */}
      <DashBoard />
    </div>
  );
}

export default App;
