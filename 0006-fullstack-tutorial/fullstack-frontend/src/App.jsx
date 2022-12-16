import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/Table";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3333/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-primary">List of Users</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {
            users.length > 0 && <Table users={users} />
          }
        </div>
      </div>
    </div>
  );
};

export default App;
