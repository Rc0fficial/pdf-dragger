import React, { useState } from "react";
import Draggable from "react-draggable";
import Bin from "../common/svg/Bin.svg";

export default function Pdf() {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPdfFile(file);
  };

  const handleRemovePdf = () => {
    setPdfFile(null);
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="mb-2"
        />
        <Draggable>
          <div className="cursor-move">
            {pdfFile && (
              <div className="mb-2 flex items-center justify-center border gap-4 shadow-md rounded py-2">
                {pdfFile.name}
                <span
                  className="ml-2 text-red-500 cursor-pointer"
                  onClick={handleRemovePdf}
                >
                  <Bin />
                </span>
              </div>
            )}
          </div>
        </Draggable>
      </div>
    </div>
  );
}
