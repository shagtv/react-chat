import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
        <Route path="/" component={HomePage} />
        <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
