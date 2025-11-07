'use client';

import { ApolloProvider } from '@apollo/client/react';
import './globals.css';
import { client } from '@/lib/apollo-client';
import { UserProvider } from '@/context/UserContext'; // ✅ import your UserProvider
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
            <Navbar />
        <ApolloProvider client={client}>
                    <UserProvider> {/* ✅ wrap everything inside */}
          {children}
                    </UserProvider>

        </ApolloProvider>
      </body>
    </html>
  );
}
