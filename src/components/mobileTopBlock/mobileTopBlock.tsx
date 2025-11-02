import Image from 'next/image';
import IconsImg from '@/assets/icons/clock.svg';
import AvatarMobileImg from '@/assets/booking-avatar-mobile.png';
import React from 'react';

export const MobileTopBlock = () => (
  <section className="md:hidden z-[2] mb-20 flex resize">
    <div className="flex flex-col text-[#FFFFFF] z-[2] pl-5">
      <h2 className="text-[27px]">Cool session</h2>
      <p className="opacity-0.9 text-[1rem] text-['#f0f0f0]">Additional type</p>
      <div className="inline-flex w-fit items-center mt-7 gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-medium">
        <Image src={IconsImg} alt="clock-icon" />
        <span>30 min</span>
      </div>
    </div>
    <Image
      width={202}
      height={340}
      className="fixed top-[20vw] right-[-16px]"
      src={AvatarMobileImg}
      priority
      alt="mobile image"
    />
  </section>
);
