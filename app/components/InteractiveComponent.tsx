"use client"; // This is important for client components

import { useState } from 'react';

export default function InteractiveComponent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
