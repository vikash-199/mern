import React from 'react';

const Dashboard = ({ name, role }) => {
  return (
    <div>
      <h1>Welcome {name}</h1>
      <p>Role: {role}</p>
    </div>
  );
};

export default Dashboard;
