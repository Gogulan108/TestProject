import "./Table.css";
import React, { useState, useMemo } from "react";
import Pagination from './Pagination'
let PageSize = 10;
function User(props) {
  const [users, setUsers] = useState(props.user);

  Array.prototype.sortBy = function (p) {
    return this.slice(0).sort(function (a, b) {
      return a[p] < b[p] ? 1 : a[p] > b[p] ? -1 : 0;
    });
  };
  Array.prototype.sortAs = function (p) {
    return this.slice(0).sort(function (a, b) {
      return a[p] > b[p] ? 1 : a[p] < b[p] ? -1 : 0;
    });
  };


  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <h1>User Details</h1>
      <p>If we click A it sort Ascending</p><p>If we click B it sort Descending</p>
      <table>
        <tbody>
          <tr>
            <th
            >
                <p onClick={() => {
                setUsers(users.sortAs("id"));
              }}>A</p>
              ID
              <p onClick={() => {
                setUsers(users.sortBy("id"));
              }}>D</p>
            </th>
            <th><p onClick={() => {
                setUsers(users.sortAs("name"));
              }}>A</p>
                Name
                <p onClick={() => {
                setUsers(users.sortBy("name"));
              }}>D</p></th>
            <th><p onClick={() => {
                setUsers(users.sortAs("username"));
              }}>A
              </p>
                UserName
                <p onClick={() => {
                setUsers(users.sortBy("username"));
              }}>D</p></th>
            <th><p onClick={() => {
                setUsers(users.sortAs("phone"));
              }}>A</p>
                Phone Number
                <p onClick={() => {
                setUsers(users.sortBy("phone"));
              }}>D</p></th>
            <th><p onClick={() => {
                setUsers(users.sortAs("email"));
              }}>A</p>
                Email
                <p onClick={() => {
                setUsers(users.sortBy("email"));
              }}>D</p></th>
            <th>
                Address
                </th>
            <th>
                Company
                </th>
          </tr>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>
                {user.address.street},{user.address.city},{user.address.suite},
                {user.address.zipcode}
              </td>
              <td>
                {user.company.name},{user.company.bs},{user.company.catchPhrase}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalCount={users.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
}
export default User;
