import React, { useState } from "react";
import { useTable } from "react-table";

const UserManagement = () => {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", email: "", role: "User" });

  const handleDelete = (id) => {
    setData(data.filter((user) => user.id !== id));
  };

  const handleEdit = (id) => {
    const userName = prompt(
      "Edit name:",
      data.find((user) => user.id === id).name
    );
    const userEmail = prompt(
      "Edit email:",
      data.find((user) => user.id === id).email
    );
    const userRole = prompt(
      "Edit role:",
      data.find((user) => user.id === id).role
    );

    setData(
      data.map((user) =>
        user.id === id
          ? { ...user, name: userName, email: userEmail, role: userRole }
          : user
      )
    );
  };

  const handleAdd = () => {
    const id = data.length + 1;
    setData([...data, { id, ...newUser }]);
    setNewUser({ name: "", email: "", role: "User" });
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <div>
            <button onClick={() => handleEdit(row.original.id)}>Editer</button>
            <button onClick={() => handleDelete(row.original.id)}>
              Supprimer
            </button>
          </div>
        ),
      },
    ],
    [data]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div>
      <h2>User Management</h2>
      <table
        {...getTableProps()}
        style={{ border: "solid 1px black", marginBottom: "20px" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "papayawhip",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <select
        value={newUser.role}
        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
      >
        <option value="User">User</option>
        <option value="Admin">Admin</option>
      </select>
      <button onClick={handleAdd}>Ajouter</button>
    </div>
  );
};

export default UserManagement;
