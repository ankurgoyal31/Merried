'use client';
import { useState } from 'react';

export default function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    const res = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });
console.log(res)
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <input type="file" accept="image/*" onChange={handleChange} />
      <button onClick={handleUpload} style={{ marginLeft: '1rem' }}>
        Upload
      </button>
    </div>
  );
}
