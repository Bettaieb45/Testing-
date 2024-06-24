import { ReactNode } from 'react';
import Providers from './providers';
import AuthStatus from './components/AuthStatus';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        <Providers>
          <header>
            <nav>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/dashboard">Dashboard</a>
              <AuthStatus />
            </nav>
          </header>
          <main>{children}</main>
          <footer>Footer content</footer>
        </Providers>
      </body>
    </html>
  );
}
