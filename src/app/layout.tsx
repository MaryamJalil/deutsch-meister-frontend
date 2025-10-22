import './globals.css';
import Providers from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Deutsch-Meister',
  description: 'AI-powered German learning app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-800">
        <Providers>
          <Navbar />
          <main className="min-h-[80vh] pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
