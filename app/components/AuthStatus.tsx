"use client";

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AuthStatus() {
    const { data: session } = useSession();
    const router = useRouter();



    if (session) {
        return (
            <div>
                <p>Welcome, {session.user?.name}</p>
                <Link href="/auth/signout">Sign Out</Link>;
            </div>
        );
    } else {
        return <Link href="/auth/signin">Sign in</Link>;
    }
}
