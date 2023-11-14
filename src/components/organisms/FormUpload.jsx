import React, { useState } from "react";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="flex">
      <label className="block text-2xl font-semibold mb-4"></label>
      <div className="border-dashed border-2 border-black rounded-2xl bg-gray-300 p-4 mb-4 w-11/12 h-80 flex justify-center items-center">
        <input type="file" accept=".csv" onChange={handleFileChange} className="hidden w-full" id="file-input" />
        <label htmlFor="file-input" className="cursor-pointer flex items-center">
          <svg width="40" height="40" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-5">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.42708 5.23856C0 8.57915 0 13.3444 0 22.875C0 32.4056 0 37.1709 2.42708 40.5114C3.21092 41.5903 4.15969 42.5391 5.23856 43.3229C8.57915 45.75 13.3444 45.75 22.875 45.75C32.4056 45.75 37.1709 45.75 40.5114 43.3229C41.5903 42.5391 42.5391 41.5903 43.3229 40.5114C45.75 37.1709 45.75 32.4056 45.75 22.875C45.75 13.3444 45.75 8.57915 43.3229 5.23856C42.5391 4.15969 41.5903 3.21092 40.5114 2.42708C37.1709 0 32.4056 0 22.875 0C13.3444 0 8.57915 0 5.23856 2.42708C4.15969 3.21092 3.21092 4.15969 2.42708 5.23856ZM24.7812 15.25C24.7812 14.1972 23.9278 13.3438 22.875 13.3438C21.8222 13.3438 20.9688 14.1972 20.9688 15.25V20.9688H15.25C14.1972 20.9688 13.3438 21.8222 13.3438 22.875C13.3438 23.9278 14.1972 24.7812 15.25 24.7812H20.9688V30.5C20.9688 31.5528 21.8222 32.4062 22.875 32.4062C23.9278 32.4062 24.7812 31.5528 24.7812 30.5V24.7812H30.5C31.5528 24.7812 32.4062 23.9278 32.4062 22.875C32.4062 21.8222 31.5528 20.9688 30.5 20.9688H24.7812V15.25Z"
              fill="#919191"
            />
          </svg>
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
