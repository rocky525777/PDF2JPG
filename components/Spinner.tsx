import React from 'react';

interface SpinnerProps {
    progress: number;
    fileName: string;
}

export function Spinner({ progress, fileName }: SpinnerProps): React.ReactNode {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-slate-200"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
          <circle
            className="text-brand_red"
            strokeWidth="10"
            strokeDasharray="283"
            strokeDashoffset={283 - (progress / 100) * 283}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 0.3s' }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-brand_text_dark">
          {progress}%
        </span>
      </div>
      <h2 className="text-2xl font-bold text-brand_text_dark mt-6">Converting...</h2>
      <p className="text-brand_text_light mt-2 max-w-sm truncate">Processing <span className="font-medium text-brand_text_dark">{fileName}</span></p>
      <p className="text-slate-500 mt-1">Please wait, this may take a moment.</p>
    </div>
  );
}