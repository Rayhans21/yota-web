import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: 'variable',
  display: 'swap',
  fallback: ['system-ui', 'Arial'],
});

export const metadata: Metadata = {
  title: 'YOTA Indonesia — Youngsters On The Air',
  icons: {
    icon: '/logo-yota-128.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='id' className={spaceGrotesk.variable}>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
