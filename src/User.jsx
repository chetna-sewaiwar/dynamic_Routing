import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  
  const { name } = useParams();

  return (
    <div>
          {name}
      <p>This is the user profile page for {name}.</p>
    </div>
  );
}

export default User;