
import { UserProvider } from './context/UserContext';
import './globals.css';
import Providers from './providers';
import Header from '@/components/Header';

export const metadata = {
  title: 'Deutsch-Meister - Learn German',
  description: 'Learn German interactively with AI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Providers>
          <UserProvider>
            <Header />
            {children}
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}
