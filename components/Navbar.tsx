import Image from 'next/image';

// const links = [{ label: 'Kenapa Gabung', href: '#kenapa' }];

export default function Navbar() {
  return (
    <header className='site-navbar fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-transparent transition-colors duration-300'>
      <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
        {/* Logo */}
        <a href='#' className='flex items-center gap-3'>
          <Image src='/logo-yota-64.png' alt='YOTA Indonesia' width={40} height={40} loading='eager' decoding='async' className='rounded-full' />
          <div>
            <div className='navbar-title font-bold text-sm leading-tight tracking-wide text-white'>YOTA Indonesia</div>
            <div className='navbar-subtitle font-mono text-[10px] leading-tight tracking-widest text-red-300'>YOUNGSTERS ON THE AIR</div>
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
        <details className='group relative md:hidden'>
          <summary className='navbar-menu-trigger grid h-10 w-10 cursor-pointer list-none place-items-center text-white' aria-label='Menu'>
            <svg className='h-6 w-6 group-open:hidden' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
            <svg className='hidden h-6 w-6 group-open:block' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </summary>
          <div className='absolute right-0 top-12 w-56 rounded-lg border border-gray-100 bg-white p-4 shadow-lg'>
            <a href='https://bit.ly/YOTARiau' className='block rounded-full bg-red-600 px-5 py-2 text-center text-sm font-semibold text-white'>
              Daftar Sekarang
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
