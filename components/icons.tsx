
import React from 'react';

type IconProps = {
  className?: string;
};

export const ChevronDownIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);


export const DownloadIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
    <polyline points="7 11 12 16 17 11" />
    <line x1="12" y1="4" x2="12" y2="16" />
  </svg>
);

export const ZipIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M16 12v-6a2 2 0 0 0 -2 -2h-6l-4 4v10a2 2 0 0 0 2 2h6"></path>
   <path d="M14 14h6v2h-5v2h5v2h-5"></path>
   <path d="M15 14v8"></path>
</svg>
);

export const ArrowLeftIcon = ({ className }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="5" y1="12" x2="11" y2="18" />
        <line x1="5" y1="12" x2="11" y2="6" />
    </svg>
);

export const AlertTriangleIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 9v2m0 4v.01" />
    <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
  </svg>
);

export const GridIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <rect x="4" y="4" width="6" height="6" rx="1" />
    <rect x="14" y="4" width="6" height="6" rx="1" />
    <rect x="4" y="14" width="6" height="6" rx="1" />
    <rect x="14" y="14" width="6" height="6" rx="1" />
  </svg>
);

export const GoogleDriveIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.14 7.5L12 18.27L4.86 7.5L8.27 2L15.73 2L19.14 7.5Z" stroke="none" />
    <path d="M22.5 12.64L15.74 23L12.44 18.27L19.18 7.56L22.5 12.64Z" stroke="none" />
    <path d="M3.73 23L1.5 12.64L8.24 1L11.54 5.73L3.73 23Z" stroke="none" />
  </svg>
);

export const DropboxIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="m6.29 6.28 5.71-3.97 5.71 3.97L11.99 10.26Zm0 7.44 5.71 3.98 5.71-3.98-5.71-3.98Zm-3.97-3.72L8.03.29l3.98 5.71-5.71 3.97Zm7.94 0 5.71-3.97 3.98 5.71-5.71 3.97Zm0 7.45 5.71 3.97v-7.44l-5.71 3.47Zm-7.94 0-5.71-3.97v7.44l5.71-3.47Z" stroke="none"/>
  </svg>
);