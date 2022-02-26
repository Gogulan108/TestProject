import './Table.css';
import {useState} from 'react';
function Comments(props) {
    console.log(props.comments);
    const [comments, setComments] = useState(props.comments);

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
  return (
    <>
    <h1>Comments Details</h1>
    <p>If we click A it sort Ascending</p><p>If we click B it sort Descending</p>
      <table>
        <tbody>
            
            <tr>
            <th
            >
                <p onClick={() => {
                setComments(comments.sortAs("id"));
              }}>A</p>
              ID
              <p onClick={() => {
                setComments(comments.sortBy("id"));
              }}>D</p>
            </th>
                <th>
                <p onClick={() => {
                  setComments(comments.sortAs("email"));
                }}>A</p>
                Email
                <p onClick={() => {
                setComments(comments.sortBy("email"));
              }}>D</p></th>
                <th>
                <p onClick={() => {
                setComments(comments.sortAs("name"));
              }}>A</p>
              Name
              <p onClick={() => {
                setComments(comments.sortBy("name"));
              }}>D</p></th>
                <th><p onClick={() => {
                setComments(comments.sortAs("body"));
              }}>A</p>
              Body
              <p onClick={() => {
                setComments(comments.sortBy("body"));
              }}>D</p></th>
                </tr>
          {comments.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Comments;
