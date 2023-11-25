import "./App.css";
import Add from "./component/Add";
import Edit from "./component/Edit";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cricketers } from "./component/datas";
import { useState } from "react";

function App() {
  const [cricketers, setCricketers] = useState(Cricketers);

  const handleCreate = (newCricketer) => {
    setCricketers([...cricketers, newCricketer]);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home cricketers={cricketers} setCricketers={setCricketers} />
            }
          />
          <Route
            path="/add"
            element={
              <Add cricketers={cricketers} handleCreate={handleCreate} />
            }
          />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
