
// This file is for global type declarations, especially for libraries loaded via CDN.

declare global {
  // pdf.js library exposed by the CDN script
  const pdfjsLib: any;
  // JSZip library exposed by the CDN script
  const JSZip: any;
}

// This export statement is required to make this file a module
export {};
