// // import { useEffect, useState } from 'react';
// // //useEffect

import { useEffect, useState } from 'react';

// import { useEffect, useState } from 'react';

// // function ApiCall() {
// //   const [users, setUsers] = useState([]);

// //   useEffect(() => {
// //     fetch('https://jsonplaceholder.typicode.com/users')
// //       .then((res) => res.json())
// //       .then((data) => setUsers(data));
// //   }, []);
// //   return (
// //     <div>
// //       <h1>User List</h1>
// //       <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
// //         <thead>
// //           <tr>
// //             <th>ID</th>
// //             <th>Name</th>
// //             <th>Email</th>
// //             <th>City</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {users.map((user) => (
// //             <tr key={user.id}>
// //               <td>{user.id}</td>
// //               <td>{user.name}</td>
// //               <td>{user.email}</td>
// //               <td>{user.city}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default ApiCall;

// function ApiCall() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <div>
//       <h1>Users Lists</h1>
//       <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
//         <thead>
//           <th>id</th>
//           <th>Name</th>
//           <th>Email</th>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ApiCall;

function ApiCall() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });
  return (
    <div>
      <h1>Users Lists</h1>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApiCall;
