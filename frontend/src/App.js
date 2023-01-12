import './App.css';
import {Router} from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
        <Router path="/" component={HomePage}/>
    </div>
  );
}

export default App;
