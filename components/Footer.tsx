'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isFullscreen) {
      document.documentElement.requestFullscreen();
    }
  }, [isFullscreen]);

  return (
    <footer className="pt-12">
      <div className="text-center text-sm">
        <p className="font-bold text-base">Copyright &copy; 2024</p>
        <p>
          Panitia Pelaksana HUT Ke 79 Kemerdekaan RI <br></br>
          Desa Kadilangu Kecamatan Baki Kabupaten Sukoharjo
        </p>
      </div>
      <nav className="flex justify-center items-center gap-4 pt-2">
        <Link href="/settings" className="underline text-sm">
          Pengaturan
        </Link>
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="underline text-sm hidden lg:block"
        >
          Layar Penuh{' '}
        </button>
      </nav>
    </footer>
  );
}
