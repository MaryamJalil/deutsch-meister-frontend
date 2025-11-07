'use client';

import { useState } from 'react';
import { gql } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client/react';
import { useUser } from '@/context/UserContext';

// Fixed GraphQL mutation - using input object and correct field names
const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        name
        email
        currentLevel
      }
    }
  }
`;

interface User {
  id: number;
  email: string;
  name: string;
  currentLevel?: string;
}

interface LoginResponse {
  login: {
    token: string;
    user: User;
  };
}

interface LoginInput {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loginMutation, { loading, error }] = useMutation<LoginResponse, { input: LoginInput }>(LOGIN);
  const { login: loginUser } = useUser();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await loginMutation({ 
        variables: { 
          input: form  // Wrap form data in input object
        } 
      });
      
      if (data) {
        localStorage.setItem('token', data.login.token); // Use token instead of access_token
        loginUser({
          ...data.login.user,
          id: data.login.user.id, // Keep as string to match UserContext
        });
        router.push('/dashboard');
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="mt-1 appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="text-sm text-red-700">{error.message}</div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>

          <div className="text-center">
            <span className="text-sm text-gray-600">
              Dont have an account?{' '}
              <a
                href="/register"
                className="font-medium text-purple-600 hover:text-purple-500"
              >
                Sign up
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}