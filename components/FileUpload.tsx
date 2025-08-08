import React, { useState, useCallback } from 'react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

export function FileUpload({ onFileSelect }: FileUploadProps): React.ReactNode {
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File | null | undefined) => {
    if (file && file.type === 'application/pdf') {
      onFileSelect(file);
    } else {
      alert('Please select a valid PDF file.');
    }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // A timeout helps prevent flickering when dragging over child elements
    setTimeout(() => setIsDragging(false), 50);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files && e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    handleFile(selectedFile);
    // Reset file input to allow selecting the same file again
    e.target.value = '';
  };
  
  const handleButtonClick = () => {
    document.getElementById('pdf-upload-input')?.click();
  }

  return (
    <div 
        className={`w-full max-w-4xl text-center p-8 transition-all duration-300 rounded-lg ${isDragging ? 'bg-red-50 scale-105' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
    >
        <h1 className="text-4xl sm:text-5xl font-bold text-brand_text_dark mb-4">PDF to JPG</h1>
        <p className="text-lg text-brand_text_light mb-12 max-w-2xl mx-auto">Convert each PDF page into a JPG or extract all images contained in a PDF.</p>
        
        <div className="flex items-center justify-center">
             <input
                type="file"
                id="pdf-upload-input"
                className="hidden"
                accept=".pdf"
                onChange={handleFileChange}
            />
            <button
                onClick={handleButtonClick}
                className="px-8 py-4 text-xl font-bold text-white bg-brand_red rounded-lg hover:bg-brand_red_dark transition-colors shadow-lg"
            >
                Select PDF files
            </button>
        </div>
        <p className="text-brand_text_light mt-6">or drop PDFs here</p>
    </div>
  );
}