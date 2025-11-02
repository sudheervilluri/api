import React from 'react';

function Home() {
  return (
    <div className="card">
      <h1>Welcome to Full Stack Application</h1>
      <p style={{ marginTop: '20px', fontSize: '18px', lineHeight: '1.6' }}>
        This is a complete full-stack application built with:
      </p>
      <ul style={{ marginTop: '20px', fontSize: '16px', lineHeight: '2' }}>
        <li><strong>Frontend:</strong> React with React Router</li>
        <li><strong>Backend:</strong> Node.js with Express</li>
        <li><strong>Database:</strong> MongoDB with Mongoose</li>
        <li><strong>API:</strong> RESTful API architecture</li>
      </ul>
      <div style={{ marginTop: '30px' }}>
        <h2>Features:</h2>
        <ul style={{ marginTop: '15px', fontSize: '16px', lineHeight: '2' }}>
          <li>User Management (CRUD operations)</li>
          <li>Product Management (CRUD operations)</li>
          <li>API integration with Axios</li>
          <li>Responsive design</li>
          <li>Error handling</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
