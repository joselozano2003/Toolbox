'use client';
import styles from '@/styles/Pdf.module.css'

import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

interface FileWithPreview extends File {
    preview: string;
}

export function PdfMerger() {
    const [pdfFiles, setPdfFiles] = useState<FileWithPreview[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files as FileList);
        const nonPdfFiles = files.filter((file) => file.type !== 'application/pdf');
      
        if (nonPdfFiles.length > 0) {
          alert('Only PDF files are allowed. Non-PDF files will not be included.');
        }
      
        const pdfFiles = files.filter((file) => file.type === 'application/pdf');
      
        const filesWithPreview = pdfFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      
        setPdfFiles((prevFiles) => [...prevFiles, ...filesWithPreview]);
      };
      

    const handleMerge = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (pdfFiles.length < 2) {
            alert('Please select at least two PDF files for merging.');
            return;
        }

        const mergedPdf = await PDFDocument.create();

        for (const file of pdfFiles) {
            const pdfBytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(pdfBytes);

            const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
            pages.forEach((page) => mergedPdf.addPage(page));
        }

        const mergedPdfBytes = await mergedPdf.save();
        const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'merged.pdf';
        link.click();

        setPdfFiles([]);
    };

  const handleRemoveFile = (index: number) => {
        setPdfFiles((prevFiles) => {
            const newFiles = [...prevFiles];
            newFiles.splice(index, 1);
            return newFiles;
        });
  };

  return (
    <div className={styles.parent}>
        <div className={styles.buttons}>
            <form onSubmit={handleMerge} className={styles.header} style={{display: 'flex', justifyContent: 'space-around'}}>
                <label htmlFor="pdfFiles" className="file-upload-label">
                    Select File
                </label>
                <input type="file" id="pdfFiles" name="pdfFiles" onChange={handleFileChange} style={{ display: 'none' }} />
                <button type="submit" className="file-upload-label">
                    Merge PDFs
                </button>
            </form>
        </div>

        {pdfFiles.length > 0 && (
            <div>
                <h2>Selected Files:</h2>
                <ul>
                    {pdfFiles.map((file, index) => (
                        <li key={index}>
                            {file.name}
                            <button className="file-upload-label" onClick={() => handleRemoveFile(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  );
}