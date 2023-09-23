import './globals.css';
import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import Header from '@/components/Header';

const font = Source_Sans_3({
  weight: ['200', '300', '400', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Abinash Shasini',
  description:
    "Hi there. I'm Abinash Shasini. I'm an India based software developer with a goal-driven creative mindset and passion for learning and innovating. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
