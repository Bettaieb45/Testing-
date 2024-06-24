import { useEffect, useState } from 'react';

export default function UsersPage() {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch('/api/users');
            const data = await res.json();
            setUsers(data);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.email}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <img src={user.image} alt={user.name} width={50} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
