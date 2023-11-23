import React, { useEffect, useState } from "react";
import { Button, form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Employees } from "./datas";
import { Link } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [run, setRun] = useState("");
  return (
    <div className="p-10">
      <h2>Update scores here..</h2>
      <form className="p-20  mx-auto py-10">
        <div class="form-group ">
          <input
            type="text"
            name="cricter"
            class="form-control py-3 px-3"
            // placeholder="your cricketer here.."
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
            // placeholder="add runs here.."
            onChange={(e) => setRun(e.target.value)}
            required
          />
        </div>
        <br></br>
        <Link to={"/"}>
          <Button className="py-2 cursor-pointer w-full ">Update</Button>
        </Link>
      </form>
    </div>
  );
};

export default Edit;
