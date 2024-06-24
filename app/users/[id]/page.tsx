"use client"
import { useEffect, useState } from 'react';

export default function UserProfile({ params }: { params: { id: string } }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [params.id]);

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h1>User Profile for {user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    );
}

