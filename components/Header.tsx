import Image from 'next/image';
import hut79 from '@/assets/hut79.png';
import kabSukoharjo from '@/assets/kabsukoharjo.png';

export default function Header() {
  return (
    <header className="mt-8">
      <div className="flex justify-center gap-8">
        <div className="flex justify-center items-center gap-4">
          <div>
            <Image
              src={hut79}
              alt="hut 79"
              width={0}
              height={0}
              style={{ width: 'auto', height: '70px' }}
            />
          </div>
          <div className="hidden lg:block font-bold leading-5">
            Panitia Pelaksana <br></br>
            HUT Ke 79 Kemerdekaan RI<br></br>
            Desa Kadilangu <br></br>
          </div>
        </div>
        <div className="flex justify-stat items-center gap-4">
          <div>
            <Image
              src={kabSukoharjo}
              alt="kab sukoharjo"
              width={0}
              height={0}
              style={{ width: 'auto', height: '70px' }}
            />
          </div>
          <div className="hidden lg:block font-bold leading-5">
            Pemerintah <br></br>
            Desa Kadilangu<br></br>
            Kec. Baki Kab. Sukoharjo <br></br>
          </div>
        </div>
      </div>
    </header>
  );
}
