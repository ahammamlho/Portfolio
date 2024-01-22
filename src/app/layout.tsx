import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GlobalContextProvider } from './context/store';
const inter = Inter({ subsets: ['latin'] });
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'ahammam lhoussaine Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" href="/icon.png" />
      </Head>
      <body className={inter.className}>
        <GlobalContextProvider> {children}</GlobalContextProvider>
      </body>
    </html>
  );
}
