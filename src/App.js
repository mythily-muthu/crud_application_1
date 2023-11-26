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

  const handleEdit = (editedCricketer) => {
    const updatedCricketers = cricketers.map((cricketer) =>
      cricketer.id === editedCricketer.id ? editedCricketer : cricketer
    );
    setCricketers(updatedCricketers);
  };

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: 'url("https://wallpapercave.com/wp/wp3049856.jpg")',
      }}
    >
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home cricketers={cricketers} setCricketers={setCricketers} />
            }
          />
          <Route path="/add" element={<Add handleCreate={handleCreate} />} />
          <Route
            path="/edit/:id"
            element={<Edit cricketers={cricketers} handleEdit={handleEdit} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
