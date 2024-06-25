import Link from 'next/link';
import AuthStatus from './AuthStatus';

export default function NavBar({ session }) {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <Link href="/" className="text-white">Home</Link>
                    <Link href="/about" className="text-white">About</Link>
                    <Link href="/dashboard" className="text-white">Dashboard</Link>
                    <AuthStatus session={session} />

                </div>
            </div>
        </nav>
       
    );
}
