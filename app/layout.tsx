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
  title: {
    default: 'Countdown Timer',
    template: '%s | Yugma Dewangga',
  },
  description: 'Created by Yugma Dewangga',
  openGraph: {
    title: 'Countdown Timer',
    description: 'Created by Yugma Dewangga',
    siteName: 'Countdown Timer',
    locale: 'id-ID',
    type: 'website',
  },
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
