'use client';
import { useState } from 'react';
import { gql } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client/react';

// ✅ GraphQL mutation updated to match backend
const REGISTER = gql`
  mutation Register($email: String!, $password: String!, $name: String) {
    register(email: $email, password: $password, name: $name) {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;

// ✅ Type definitions aligned with backend schema
interface User {
  id: number;
  email: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
}

interface RegisterResponse {
  register: User;
}

interface RegisterVariables {
  email: string;
  password: string;
  name?: string;
}

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [register, { loading, error }] =
    useMutation<RegisterResponse, RegisterVariables>(REGISTER);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await register({ variables: form });
      if (data) {
        console.log('User registered:', data.register);
        alert('Registration successful!');
        router.push('/login');
      }
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Create an Account</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <input
          type="text"
          placeholder="Name (optional)"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2 rounded"
        />
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
          {loading ? 'Registering...' : 'Register'}
        </button>
        {error && <p className="text-red-600 text-sm">{error.message}</p>}
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600 hover:underline">
          Login
        </a>
      </p>
    </main>
  );
}
