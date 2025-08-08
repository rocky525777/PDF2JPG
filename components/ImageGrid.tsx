import React, { useState } from 'react';
import { DownloadIcon, ZipIcon, ArrowLeftIcon } from './icons';

interface ImageGridProps {
  imageUrls: string[];
  onReset: () => void;
  originalFileName: string;
}

export function ImageGrid({ imageUrls, onReset, originalFileName }: ImageGridProps): React.ReactNode {
  const [isZipping, setIsZipping] = useState(false);
  const baseFileName = originalFileName.replace(/\.pdf$/i, '');

  const handleDownloadAll = async () => {
    if (isZipping) return;
    setIsZipping(true);

    try {
      const zip = new JSZip();

      for (let i = 0; i < imageUrls.length; i++) {
        const url = imageUrls[i];
        const response = await fetch(url);
        const blob = await response.blob();
        zip.file(`${baseFileName}-page-${i + 1}.jpg`, blob);
      }

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(zipBlob);
      link.download = `${baseFileName}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);

    } catch (error) {
      console.error("Failed to create ZIP file:", error);
      alert("An error occurred while creating the ZIP file.");
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-brand_text_dark">Conversion Successful!</h2>
          <p className="text-brand_text_light">{imageUrls.length} page(s) converted.</p>
        </div>
        <div className="flex gap-4">
            <button onClick={onReset} className="flex items-center gap-2 px-4 py-2 bg-slate-200 text-brand_text_dark rounded-md hover:bg-slate-300 transition-colors">
                <ArrowLeftIcon className="w-5 h-5" />
                Convert Another
            </button>
            <button onClick={handleDownloadAll} disabled={isZipping} className="flex items-center gap-2 px-6 py-3 bg-brand_red text-white font-bold rounded-md hover:bg-brand_red_dark transition-colors disabled:bg-red-400 disabled:cursor-not-allowed shadow-lg">
                {isZipping ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <ZipIcon className="w-5 h-5" />
                )}
                {isZipping ? 'Zipping...' : 'Download All (.zip)'}
            </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {imageUrls.map((url, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg bg-white shadow-md border border-slate-200">
            <img src={url} alt={`Page ${index + 1}`} className="w-full h-auto aspect-[3/4] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
              <p className="text-white font-bold text-lg mb-4">Page {index + 1}</p>
              <a
                href={url}
                download={`${baseFileName}-page-${index + 1}.jpg`}
                className="flex items-center gap-2 px-4 py-2 bg-brand_red text-white rounded-md hover:bg-brand_red_dark transition-colors"
              >
                <DownloadIcon className="w-5 h-5" />
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}