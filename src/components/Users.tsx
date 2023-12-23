import { useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <>
      <h1>Users</h1>

      {errorMessage && <p>{errorMessage}</p>}

      {!errorMessage && (
        <ul>
          {users.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Users;
