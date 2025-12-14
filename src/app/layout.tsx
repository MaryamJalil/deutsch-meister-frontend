'use client';

import { ApolloProvider } from '@apollo/client/react';
import './globals.css';
import { client } from '@/lib/apollo-client';
import { UserProvider } from '@/context/UserContext';
import Navigation from '@/components/Navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>
          <UserProvider>
            <Navigation />
            <main className="pt-16">
              {children}
            </main>
          </UserProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
