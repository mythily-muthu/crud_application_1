import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cricketers } from "./datas";
import { Link } from "react-router-dom";

const Home = ({ cricketers, setCricketers }) => {
  // const [cricketers, setCricketers] = useState(Cricketers);

  const handleDelete = (id) => {
    const updatedCricketerList = cricketers.filter((item) => item.id !== id);
    console.log(updatedCricketerList);
    setCricketers(updatedCricketerList);
  };
  const handleEdit = (second) => {};
  console.log(cricketers);

  return (
    <div className="py-10">
      <h1>Find your fav cricketer scores here..</h1>
      <div className="m-16">
        <Table className="striped bodered hover:text-red-200">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cricketers && cricketers.length > 0 ? (
              cricketers.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.run}</td>
                    <td>
                      <Link to={"/edit"}>
                        <Button
                          className="py-1 cursor-pointer"
                          onClick={() => handleEdit(item.id)}
                        >
                          Edit
                        </Button>
                      </Link>
                      &nbsp;
                      <Button
                        className="btn-danger m-1 py-1 cursor-pointer"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <p>"no datas available"</p>
            )}
          </tbody>
        </Table>
        <br></br>
        <Link to={"/add"}>
          <Button className="w-full btn-success py-2">Add</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
