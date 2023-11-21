import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import Draggable from "react-draggable";
import Bin from "../common/svg/Bin.svg";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const PDFViewer = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [numPages, setNumPages] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex">
      <div>
        <input type="file" onChange={handleFileChange} />
        {selectedFile && (
          <Document
            file={selectedFile}
            onLoadSuccess={handleDocumentLoadSuccess}
          >
            {Array.from({ length: numPages }).map((_, i) => (
              <Page key={i} pageNumber={i + 1} />
            ))}
          </Document>
        )}
      </div>
      <div className="">
        <Draggable>
          <div className="cursor-move flex items-center justify-center gap-2 border bg-red-500  shadow-md rounded py-2 px-2">
            Testing
            <Bin />
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default PDFViewer;
