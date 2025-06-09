import React, { useState, useEffect } from "react";
import "./MasterDetail.css"; // Importamos estilos separados

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
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  return (
    <div className="container">
      {/* Vista maestra con botones futuristas */}
      <div className="master">
        <h2>Selecciona un usuario</h2>
        {users.map((user) => (
          <button
            key={user.id}
            className="user-button"
            onClick={() => setSelectedUser(user)}
          >
            {user.name}
          </button>
        ))}
      </div>

      {/* Vista detalle con tarjeta futurista */}
      <div className="detail">
        {selectedUser ? (
          <div className="user-card">
            <h2>{selectedUser.name}</h2>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Teléfono:</strong> {selectedUser.phone}</p>
            <p><strong>Website:</strong> {selectedUser.website}</p>
          </div>
        ) : (
          <p className="placeholder">Selecciona un usuario para ver detalles</p>
        )}
      </div>
    </div>
  );
}

export default MasterDetail;