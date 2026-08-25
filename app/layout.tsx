import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'YOTA Indonesia — Youngsters On The Air',
  icons: {
    icon: '/logo-yota-128.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='id'>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
