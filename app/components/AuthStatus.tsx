"use client"
import { signOut } from 'next-auth/react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';

export default  function AuthStatus({session }) {
    const handleSignOut = async () => {
        await signOut({ redirect: false });
        window.location.href = '/'; // Redirect to home page to refresh session state
    };
    if (session) {
        return (
            <div>
                <p>Welcome, {session.user.name}</p>
                <Link onClick={handleSignOut} href="/auth/signout">Sign Out</Link>
            </div>
        );
    } else {
        return <Link href="/auth/signin">Sign in</Link>;
    }
}
