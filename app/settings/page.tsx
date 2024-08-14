'use client';

import Image from 'next/image';
import back from '@/assets/back.svg';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';

type Inputs = {
  minute: number;
  second: number;
  title: string;
  subtitle: string;
};

export default function Settings() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { minute, second } = data;

    if (typeof window !== undefined) {
      localStorage.setItem('minute', minute.toString());
      localStorage.setItem('second', second.toString());
      toast.success('Berhasil memprbarui');
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      const initialMinutes = localStorage.getItem('minute') || 0;
      const initialSeconds = localStorage.getItem('second') || 15;

      setValue('minute', Number(initialMinutes));
      setValue('second', Number(initialSeconds));
    }
  }, [setValue]);

  return (
    <section className="max-w-[500px] mx-auto pt-6">
      <header className="px-4">
        <Link href="/" className="flex justify-start items-center gap-2">
          <Image
            src={back}
            alt="back button"
            width={0}
            height={0}
            style={{ width: 'auto', height: '16px' }}
          />
          <span>Kembali</span>
        </Link>
      </header>
      <div className="py-6  px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="minute"
                className="block text-sm font-medium text-gray-900"
              >
                Atur Menit
              </label>
              <div className="mt-1">
                <input
                  {...register('minute', { required: true })}
                  type="number"
                  id="minute"
                  placeholder="Contoh: 10"
                  className="px-2 text-sm block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:outline-red-300 focus:outline-2"
                />
                {errors.minute && (
                  <span className="text-xs text-red-400">
                    Menit tidak boleh kosong
                  </span>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="second"
                className="block text-sm font-medium text-gray-900"
              >
                Atur Detik
              </label>
              <div className="mt-1">
                <input
                  {...register('second', { required: true })}
                  type="number"
                  id="second"
                  placeholder="Contoh: 30"
                  className="px-2 text-sm block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:outline-red-300 focus:outline-2"
                />
                {errors.second && (
                  <span className="text-xs text-red-400">
                    Detik tidak boleh kosong
                  </span>
                )}
              </div>
            </div>
          </div>

          {/*--- Hidden ---*/}
          <div className="sm:col-span-3">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-400 mt-2"
            >
              Atur Judul
            </label>
            <div className="mt-1">
              <input
                {...register('title')}
                type="text"
                id="title"
                placeholder="Contoh: Lomba Memasak"
                disabled
                className="px-2 text-sm block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:outline-red-300 focus:outline-2"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="subtitle"
              className="block text-sm font-medium text-gray-400 mt-2"
            >
              Atur Sub Judul
            </label>
            <div className="mt-1">
              <textarea
                {...register('subtitle')}
                disabled
                id="subtitle"
                placeholder="Contoh: Pemuda - pemudi Antar RT Se-Desa Kadilangu"
                className="px-2 h-[100px] text-sm block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:outline-red-300 focus:outline-2"
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="py-2 px-4 bg-red-500 text-white text-sm rounded-full hover:bg-red-600"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
