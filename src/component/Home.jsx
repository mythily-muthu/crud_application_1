import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Employees } from "./datas";

const Home = () => {
  const [employees, setEmployees] = useState(Employees);

  const handleDelete = (id) => {
    const updatedEmployeeList = employees.filter((item) => item.id !== id);
    setEmployees(updatedEmployeeList);
  };

  return (
    <div>
      <div className="m-10">
        <Table className="striped bodered hover:text-red-200">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>
                        <Button
                          className=""
                          //   onClick={() => handleEdit(item.id)}
                        >
                          Edit
                        </Button>
                        &nbsp;
                        <Button
                          className=""
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "no datas available"}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
