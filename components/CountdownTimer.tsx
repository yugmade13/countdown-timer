'use client';

import Image from 'next/image';
import play from '@/assets/play.svg';
import pause from '@/assets/pause.svg';
import restart from '@/assets/restart.svg';
import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [isActive, setIsActive] = useState(false);
  const [isRestart, setIsRestart] = useState(false);

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (typeof window !== undefined) {
      const minutes = localStorage.getItem('minute') || 0;
      const seconds = localStorage.getItem('second') || 15;

      setMinutes(Number(minutes));
      setSeconds(Number(seconds));
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else if (minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          clearInterval(interval!);
          setIsActive(false); // Stop timer when it reaches 0
        }
      }, 1000);
    } else if (!isActive && (minutes !== 0 || seconds !== 0)) {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  const handleRestart = () => {
    if (typeof window !== undefined) {
      const minutes = localStorage.getItem('minute') || 0;
      const seconds = localStorage.getItem('second') || 15;

      setMinutes(Number(minutes));
      setSeconds(Number(seconds));
    }

    setIsActive(false);
    setIsRestart(true);
    setTimeout(() => {
      setIsRestart(false);
    }, 1000);
  };

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        {minutes === 0 && seconds <= 10 ? (
          <h2 className="font-black text-[125px] lg:text-[275px] text-red-500">
            {seconds}
          </h2>
        ) : (
          <h2 className="font-black text-[125px] lg:text-[275px]">
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h2>
        )}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setIsActive(!isActive)}
            className="px-5 py-2 bg-red-500 text-sm text-white rounded-full lg:text-base lg:px-6 lg:py-3"
          >
            <div className="flex justify-center items-center gap-1">
              <Image
                src={isActive ? pause : play}
                alt="play and pause button"
                width={0}
                height={0}
                className="w-auto h-[16px]"
              />
              <span>{isActive ? 'Jeda' : 'Mulai'}</span>
            </div>
          </button>
          <button
            onClick={handleRestart}
            className="p-1.5 rounded-full border-2 border-gray-900"
          >
            <Image
              src={restart}
              alt="play and pause button"
              width={0}
              height={0}
              className={`w-auto h-[16px] lg:h-[24px] ${
                isRestart ? 'restart_animation' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
