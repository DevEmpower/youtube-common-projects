import React from "react";

const Table = ({ users }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Operations</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <th scope="row">{user._id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
