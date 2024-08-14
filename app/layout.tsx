import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  style: 'normal',
  weight: ['400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Countdown Timer',
  description: 'Created by Yugma Dewangga',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <main className="w-full max-w-[1028px] mx-auto min-h-screen overflow-hidden">
        <Toaster position="top-center" />
          {children}
        </main>
      </body>
    </html>
  );
}
