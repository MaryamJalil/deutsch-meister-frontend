'use client';

import { useQuery } from '@apollo/client/react';
import { GET_USERS } from '@/lib/queries';
import Loading from '@/components/ui/Loading';
import ErrorDisplay from '@/components/ui/ErrorDisplay';

interface GetUsersData {
  users: {
    id: string;
    name: string;
    email: string;
  }[];
}

export default function UsersPage() {
  const { data, loading, error, refetch } = useQuery<GetUsersData>(GET_USERS);
  
  if (loading) return <Loading message="Loading users..." />;
  if (error) return (
    <ErrorDisplay
      message={error.message}
      title="Error loading users"
      onRetry={() => refetch()}
    />
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Users</h1>
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {data?.users.map((user) => (
              <li key={user.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {data?.users.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No users found
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
