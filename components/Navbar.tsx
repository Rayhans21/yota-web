'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// const links = [{ label: 'Kenapa Gabung', href: '#kenapa' }];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
      <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
        {/* Logo */}
        <a href='#' className='flex items-center gap-3'>
          <Image src='/logo-yota-128.png' alt='YOTA Indonesia' width={40} height={40} loading='eager' decoding='async' className='rounded-full' />
          <div>
            <div className={`font-bold text-sm leading-tight tracking-wide ${scrolled ? 'text-gray-900' : 'text-white'}`}>YOTA Indonesia</div>
            <div className={`font-mono text-[10px] leading-tight tracking-widest ${scrolled ? 'text-red-600' : 'text-red-300'}`}>YOUNGSTERS ON THE AIR</div>
          </div>
        </a>

        {/* Desktop links */}
        {/* <nav className='hidden md:flex items-center gap-8'>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`text-sm font-medium transition-colors hover:text-red-600 ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>
              {l.label}
            </a>
          ))}
        </nav> */}

        {/* CTA */}
        <div className='hidden md:flex items-center gap-3'>
          <a href='https://bit.ly/YOTARiau' className='bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors'>
            Daftar Sekarang
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`} onClick={() => setOpen(!open)} aria-label='Menu'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            {open ? <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' /> : <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className='md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4'>
          {/* {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className='text-gray-700 font-medium text-sm'>
              {l.label}
            </a>
          ))} */}
          <a href='https://bit.ly/YOTARiau' className='bg-red-600 text-white text-sm font-semibold px-5 py-2 rounded-full text-center'>
            Daftar Sekarang
          </a>
        </div>
      )}
    </header>
  );
}
