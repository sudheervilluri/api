import React from 'react';
import { Link } from 'react-router-dom';

function UserCard({ user, onDelete }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
        <Link to={`/users/${user._id}`}>
          <button className="btn-secondary">View Details</button>
        </Link>
        <button className="btn-danger" onClick={() => onDelete(user._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserCard;
