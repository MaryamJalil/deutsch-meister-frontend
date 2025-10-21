'use client';

import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

// ✅ Define a type for the expected data
interface GetUsersData {
  users: {
    id: string;
    name: string;
    email: string;
  }[];
}

export default function UsersPage() {
    debugger;
  // ✅ Pass type as generic parameter
  const { data, loading, error } = useQuery<GetUsersData>(GET_USERS);
  debugger
console.log(data,'data')
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <ul>
        {data?.users.map((user) => (
          <li key={user.id} className="border p-2 rounded mb-2">
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
}
