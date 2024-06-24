import { ReactNode } from 'react';

export default function UsersLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <h2>Users Section</h2>
            {children}
        </div>
    );
}
