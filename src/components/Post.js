import {useState} from 'react'
import "./Table.css";
function Post(props) {
  console.log(props.post);
  const [posts, setPosts] = useState(props.post);
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
      <h1>Post Details</h1>
      <p>If we click A it sort Ascending</p><p>If we click B it sort Descending</p>
      <table>
        <tbody>
          <tr>
          <th
            >
                <p onClick={() => {
                setPosts(posts.sortAs("id"));
              }}>A</p>
              ID
              <p onClick={() => {
                setPosts(posts.sortBy("id"));
              }}>D</p>
            </th>
            <th>
            <p onClick={() => {
                setPosts(posts.sortAs("title"));
              }}>A</p>
              Title
              <p onClick={() => {
                setPosts(posts.sortBy("title"));
              }}>D</p></th>
            <th><p onClick={() => {
                setPosts(posts.sortAs("body"));
              }}>A</p>
              Body
              <p onClick={() => {
                setPosts(posts.sortBy("body"));
              }}>D</p></th>
          </tr>
          {posts.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Post;
