import React, { useEffect, useState } from "react";
import { Button, form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";

const Edit = ({ cricketers, handleEdit }) => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [run, setRun] = useState("");

  // finding the cricketer obj with id
  useEffect(() => {
    const cricketer = cricketers.find((cricketer) => cricketer.id === +id);
    if (cricketer) {
      setName(cricketer.name);
      setRun(cricketer.run);
    }
  }, [id, cricketers]);
  // updating the datas
  const handleUpdate = () => {
    const updatedCricketer = {
      id: +id,
      name: name,
      run: run,
    };
    handleEdit(updatedCricketer);
  };

  return (
    <div className="p-20 flex flex-col w-full items-center justify-center ">
      <h1 className="flex justify-center text-white">Update scores here..</h1>
      <form className="p-20  mx-auto py-10 w-full">
        <div class="form-group ">
          <input
            type="text"
            name="cricter"
            class="form-control py-3 px-3"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <br></br>
        <div class="form-group">
          <input
            type="number"
            name="runs"
            class="form-control py-3 px-3"
            onChange={(e) => setRun(e.target.value)}
            value={run}
            required
          />
        </div>
        <br></br>
        <Link to={"/"}>
          <Button
            className="py-2 cursor-pointer w-full "
            onClick={handleUpdate}
          >
            Update
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Edit;
