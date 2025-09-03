import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akshay | Frontend Developer Portfolio | React.js & Next.js Expert',
  description: 'Professional portfolio of a Frontend Developer with 2+ years experience in React.js, Next.js, Vue.js, Node.js, and MongoDB. Team leader and full-stack developer.',
  keywords: 'frontend developer, react, nextjs, vuejs, nodejs, mongodb, portfolio, web developer',
  authors: [{ name: 'Akshay Lokapur' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}