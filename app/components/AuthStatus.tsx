"use client"
import { signOut } from 'next-auth/react';
import Link from 'next/link';

export default  function AuthStatus({session }) {
    const handleSignOut = async () => {
        await signOut({ redirect: true });
    };
   
    if (session) {
        return (
            <div>
                <p>Welcome, {session.user.name}</p>
                <Link onClick={handleSignOut} href="/auth/signout">Sign Out</Link>
            </div>
        );
    } else {
        return <Link  href="/auth/signin">Sign in</Link>;
    }
}
