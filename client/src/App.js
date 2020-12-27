import './App.css';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import RightBar from "./components/RightBar"

function App() {
  return (
    <div className="App">

      <Header />

      <div className="Body">

        <Sidebar />

        <Feed />

        <RightBar />

      </div>
      


    </div>
  );
}

export default App;
