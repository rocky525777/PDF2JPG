import React, { useState, useCallback } from 'react';
import { FileUpload } from './components/FileUpload';
import { ImageGrid } from './components/ImageGrid';
import { Spinner } from './components/Spinner';
import { convertPdfToImages } from './services/pdfConverter';
import { Header } from './components/Header';
import { ErrorDisplay } from './components/ErrorDisplay';

type Status = 'idle' | 'converting' | 'success' | 'error';

export default function App(): React.ReactNode {
  const [status, setStatus] = useState<Status>('idle');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const handleFileSelect = useCallback((file: File) => {
    setPdfFile(file);
    setImageUrls([]);
    setError(null);
    setStatus('converting');
    setProgress(0);
    
    convertPdfToImages(file, setProgress)
      .then(urls => {
        setImageUrls(urls);
        setStatus('success');
      })
      .catch(err => {
        console.error("Conversion failed:", err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred during conversion.');
        setStatus('error');
      });
  }, []);

  const handleReset = () => {
    setStatus('idle');
    setPdfFile(null);
    setImageUrls([]);
    setError(null);
    setProgress(0);
  };

  const renderContent = () => {
    switch (status) {
      case 'converting':
        return <Spinner progress={progress} fileName={pdfFile?.name || 'your file'} />;
      case 'success':
        return <ImageGrid imageUrls={imageUrls} onReset={handleReset} originalFileName={pdfFile?.name || 'converted'} />;
      case 'error':
        return <ErrorDisplay message={error} onRetry={handleReset} />;
      case 'idle':
      default:
        return <FileUpload onFileSelect={handleFileSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand_bg flex flex-col">
      <Header />
      <main className="w-full max-w-7xl mx-auto flex-grow flex flex-col items-center justify-center p-4">
        {renderContent()}
      </main>
      <footer className="w-full bg-white text-center py-4 mt-8 border-t border-slate-200">
          <p className="text-brand_text_light text-sm">
              &copy; BANK CSP HELP {new Date().getFullYear()} ® - Your PDF Editor
          </p>
      </footer>
    </div>
  );
}