import React, { useEffect, useState } from "react";
import { Button, form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Cricketers } from "./datas";
import { Link } from "react-router-dom";

const Add = ({ handleCreate }) => {
  const [name, setName] = useState("");
  const [run, setRun] = useState("");

  // a new obj is created with name and runs
  const handleCreateClick = () => {
    let newCricketer = {
      id: new Date().getTime(),
      name: name,
      run: run,
    };
    // the new obj is been added to the crickter list
    handleCreate(newCricketer);
    // empty the input fields
    setName("");
    setRun("");
  };

  return (
    <div className="p-10">
      <h2>Add Your Cricketer score here..</h2>
      <form className="p-20  mx-auto py-10">
        <div class="form-group ">
          <input
            type="text"
            name="cricter"
            class="form-control py-3 px-3"
            placeholder="your cricketer here.."
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <br></br>
        <div class="form-group">
          <input
            type="number"
            name="runs"
            class="form-control py-3 px-3"
            placeholder="add runs here.."
            onChange={(e) => setRun(e.target.value)}
            required
          />
        </div>
        <br></br>
        <Link to={"/"}>
          <Button
            className="py-2 cursor-pointer w-full "
            type="submit"
            onClick={handleCreateClick}
          >
            Create
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Add;
