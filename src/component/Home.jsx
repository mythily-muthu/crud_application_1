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

  return (
    <div className="py-20">
      <h1 className="flex justify-center text-white">
        Find your fav cricketer scores here..
      </h1>
      <div className="m-16">
        <Table className="striped bodered hover:text-red-200 ">
          <thead className="p-1">
            <tr className="p-10 text-xl">
              <th>Id</th>
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
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.run}</td>
                    <td>
                      <Link to={`/edit/${item.id}`}>
                        <Button className="py-1 cursor-pointer">Edit</Button>
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
          <Button className="w-full btn-success py-2 font-bold">ADD</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
