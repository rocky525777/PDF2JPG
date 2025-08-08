import React from 'react';
import { AlertTriangleIcon } from './icons';

interface ErrorDisplayProps {
    message: string | null;
    onRetry: () => void;
}

export function ErrorDisplay({ message, onRetry }: ErrorDisplayProps): React.ReactNode {
    return (
        <div className="flex flex-col items-center justify-center text-center bg-white p-8 rounded-lg shadow-lg border border-red-200 max-w-lg">
            <AlertTriangleIcon className="w-16 h-16 text-brand_red mb-4" />
            <h2 className="text-2xl font-bold text-brand_text_dark mb-2">Conversion Failed</h2>
            <p className="text-brand_text_light max-w-md mb-6">
                {message || 'An unexpected error occurred. Please check the file and try again.'}
            </p>
            <button
                onClick={onRetry}
                className="px-6 py-2 bg-brand_red text-white font-bold rounded-md hover:bg-brand_red_dark transition-colors shadow-lg"
            >
                Try Again
            </button>
        </div>
    );
}