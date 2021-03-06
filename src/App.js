import './App.css';
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
