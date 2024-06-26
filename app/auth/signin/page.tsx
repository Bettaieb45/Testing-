"use client";

import { useEffect } from 'react';
import { signIn } from 'next-auth/react';

export default function SignInPage() {
    useEffect(() => {
        // Redirect to Auth0 sign in
        signIn('auth0');
    }, []);

    return (
        <div>
            <h1>Redirecting to sign in...</h1>
        </div>
    );
}