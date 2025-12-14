"use client";

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { API_URL, STORAGE_KEYS } from "@/constants";

const httpLink = new HttpLink({
  uri: API_URL,
});

const authLink = new ApolloLink((operation, forward) => {
  if (typeof window !== "undefined") {
    try {
      const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : "",
        },
      });
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }
  return forward(operation);
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
  defaultOptions: {
    watchQuery: {
      errorPolicy: "all",
    },
    query: {
      errorPolicy: "all",
    },
  },
});
