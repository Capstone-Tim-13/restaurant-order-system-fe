import React, { useState } from "react";
import { ADD_FILE } from "../../assets";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // validasi ukuran file maksimal 10 mb
      if (file.size > 10 * 1024 * 1024) {
        alert("Ukuran file melebihi batas maksimal (10 MB)");
        return;
      }

      // Atur file terpilih jika validasi berhasil
      setSelectedFile(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    if (file) {
      // validasi ukuran file maksimal 10 mb
      if (file.size > 10 * 1024 * 1024) {
        alert("Ukuran file melebihi batas maksimal (10 MB)");
        return;
      }

      // Atur file terpilih jika validasi berhasil
      setSelectedFile(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex">
      <label className="block text-2xl font-semibold mb-4"></label>
      <div className="border-dashed border-2 border-black rounded-2xl bg-gray-100 p-4 mb-4 w-11/12 h-80 flex justify-center items-center" onDrop={handleDrop} onDragOver={handleDragOver}>
        <input type="file" accept=".csv" onChange={handleFileChange} className="hidden w-full" id="file-input" />
        <label htmlFor="file-input" className="cursor-pointer flex items-center">
          <img className="mb-5" id="add-file" src={ADD_FILE} alt="Add file" />
          <div className="ml-6">
            <p className="text-xl font-semibold text-zinc-500">Tarik atau unggah file anda kesini</p>
            <p className="text-lg text-zinc-500">Format: csv. Size: maks. 10 mb</p>
          </div>
        </label>
        {selectedFile && <span className="ml-2">{selectedFile.name}</span>}
      </div>
    </div>
  );
};

export default UploadFile;
