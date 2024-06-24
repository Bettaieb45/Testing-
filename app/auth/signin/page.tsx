"use client";

import { getProviders, signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';

export default function SignInPage() {
    const [providers, setProviders] = useState<any>(null);

    useEffect(() => {
        const fetchProviders = async () => {
            const res = await getProviders();
            setProviders(res);
        };

        fetchProviders();
    }, []);

    return (
        <div>
            <h1>Sign In</h1>
            {providers ? (
                Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button onClick={() => signIn(provider.id)}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
