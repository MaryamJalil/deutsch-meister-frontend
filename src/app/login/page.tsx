'use client';
import { useState } from 'react';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client/react';
import { useRouter } from 'next/navigation';

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      user {
        id
        name
        email
      }
    }
  }
`;

// ✅ Fixed interfaces
interface LoginUser {
  id: string;
  name: string;
  email: string;
}

interface LoginResponse {
  login: {  // ✅ Changed from 'register' to 'login'
    access_token: string;
    user: LoginUser;
  };
}

interface LoginVariables {
  email: string;    // ✅ Removed 'name' field
  password: string;
}

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [login, { loading, error }] = useMutation<LoginResponse, LoginVariables>(LOGIN);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await login({ variables: form });
      // ✅ Added null check for data
      if (data) {
        localStorage.setItem('token', data.login.access_token);
        router.push('/dashboard');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Login</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p className="text-red-600 text-sm">{error.message}</p>}
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Dont have an account?{' '}
        <a href="/register" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
    </main>
  );
}