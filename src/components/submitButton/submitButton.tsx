import React, { FunctionComponent } from 'react';
import { SubmitButtonProps } from '@/types/components/submitButton';

export const SubmitButton: FunctionComponent<SubmitButtonProps> = ({
  handleConfirm,
  isDisabled = true,
  isActive = false,
}) => (
  <div className="md:pr-0 pr-[20px] w-full flex items-center">
    <button
      type="button"
      onClick={handleConfirm}
      disabled={isDisabled}
      className={`w-full max-w-[370px] mx-auto rounded-[100px] mb:mt-10 mt-15 py-4  text-white text-lg font-semibold transition-colors
    ${isActive ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-300 cursor-not-allowed'}
  `}
    >
      Confirm
    </button>
  </div>
);
