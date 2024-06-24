"use client";

import { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignOutPage() {
    const router = useRouter();

    useEffect(() => {
        (async () => {
            await signOut({ redirect: false });
            router.push('/');
        })();
    }, [router]);

    return <p>Signing out...</p>;
}
