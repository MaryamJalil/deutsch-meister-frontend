'use client';

import { ApolloProvider } from '@apollo/client/react'; // ✅ Correct import path in v5
import { client } from './lib/apollo-client';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
