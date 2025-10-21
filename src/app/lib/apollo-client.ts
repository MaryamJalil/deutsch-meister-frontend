'use client';

import {
  ApolloClient,
  InMemoryCache,
  HttpLink
} from '@apollo/client';
 

// ✅ Combine links

export const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/graphql' }),
  cache: new InMemoryCache(),
});