import Image from 'next/image';
import AvatarImg from '@/assets/booking-avatar.png';
import React from 'react';

export const AvatarBlock = () => (
  <div className="flex items-center gap-4 pr-[20px] md:px-[32px]">
    <div className="relative hidden md:block w-[120px] h-[120px] rounded-full overflow-hidden shrink-0">
      <Image src={AvatarImg} alt="avatar" fill className="object-cover" priority sizes="120px" />
    </div>
    <div>
      <h1 className="text-[28px] main-title">Book a Session</h1>
      <p className="text-[#8F91A1] text-sm mt-[7px]">
        Choose a date and time that is convenient for you to e-meet your stylist
      </p>
    </div>
  </div>
);
