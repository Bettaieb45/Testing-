import { ReactNode } from 'react';
import Providers from './providers';
import NavBar from './components/NavBar';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        <Providers>
          <NavBar session={session} />
          <main>{children}</main>
          <footer>Footer content</footer>
        </Providers>
      </body>
    </html>
  );
}
