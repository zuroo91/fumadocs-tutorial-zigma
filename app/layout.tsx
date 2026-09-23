import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Game Docs – Membangun Game Kuis RPG',
  description:
    'Dokumentasi & tutorial teknis membangun game kuis RPG multiplayer real-time.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
