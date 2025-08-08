
import '../types'; // This ensures the global types for pdfjsLib are acknowledged

/**
 * Converts a PDF file into an array of JPG image data URLs.
 * @param file The PDF file to convert.
 * @param onProgress A callback function to report conversion progress (0-100).
 * @returns A promise that resolves to an array of base64 encoded JPG image strings.
 */
export const convertPdfToImages = async (
  file: File,
  onProgress: (progress: number) => void
): Promise<string[]> => {
  // Set the worker script path for pdf.js. This is crucial for performance.
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
  const numPages = pdf.numPages;
  const imageUrls: string[] = [];

  const SCALE = 2.0; // Use a higher scale for better image quality
  const MIME_TYPE = 'image/jpeg';
  const QUALITY = 0.95; // JPG quality from 0 to 1

  for (let i = 1; i <= numPages; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: SCALE });

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    if (!context) {
        throw new Error('Failed to get canvas 2D context');
    }

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };

    await page.render(renderContext).promise;

    const url = canvas.toDataURL(MIME_TYPE, QUALITY);
    imageUrls.push(url);
    
    // Report progress after each page is rendered
    const currentProgress = Math.round((i / numPages) * 100);
    onProgress(currentProgress);
  }

  return imageUrls;
};
