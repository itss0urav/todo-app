import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContextBase from "./context/ContextBase";
import { datas } from "./data/datas";
import { useState } from "react";

function App() {
  const [Data, NewData] = useState(datas);
  const studentData = {
    Data,
    NewData,
  };
  return (
    <div className="App">
      <BrowserRouter>
        <ContextBase.Provider value={studentData}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ContextBase.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
