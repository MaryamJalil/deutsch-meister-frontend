import './globals.css';
import Providers from './providers';

export const metadata = {
  title: 'Deutsch-Meister',
  description: 'Learn German interactively with AI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
