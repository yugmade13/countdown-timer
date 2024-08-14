import CountdownTimer from '@/components/CountdownTimer';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Title from '@/components/Title';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="px-4 overflow-hidden">
      <Header />
      <Title />
      <CountdownTimer />
      <Footer />
    </section>
  );
}
