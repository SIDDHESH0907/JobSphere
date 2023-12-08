import React, { useState } from "react";
import Card from "./Card";
import "./CardList.css";
import employees from "../database/Employee.json";

function CardList() {
  const [search, setSearch] = useState('');

  return (
    <>
      <div className="search-container">
        <input className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search products..."
        />
      </div>
      <div className="card-list">
        {employees
          .filter((employee) => {
            return search.toLowerCase() === ""
              ? employee
              : employee.first_name.toLowerCase().includes(search);
          })
          .map((employee) => (
            <Card key={employee.id} {...employee} />
          ))}
      </div>
    </>
  );
}

export default CardList;
