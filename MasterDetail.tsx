import React, { useState, useEffect } from 'react';

// Definición de la interfaz para los usuarios
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

function MasterDetail() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    // Obtener datos de usuarios desde la API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      {/* Vista maestra */}
      <ul style={{ width: '40%', borderRight: '1px solid #ccc' }}>
        {users.map(user => (
          <li
            key={user.id}
            onClick={() => setSelectedUser(user)}
            style={{ cursor: 'pointer', padding: '8px' }}
          >
            {user.name}
          </li>
        ))}
      </ul>

      {/* Vista detalle */}
      <div style={{ padding: '16px', width: '60%' }}>
        {selectedUser ? (
          <div>
            <h2>{selectedUser.name}</h2>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Website:</strong> {selectedUser.website}</p>
          </div>
        ) : (
          <p>Seleccione un usuario para ver los detalles</p>
        )}
      </div>
    </div>
  );
}

export default MasterDetail;