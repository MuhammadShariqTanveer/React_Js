import React from 'react';

function ImageModal({ img, onClose }) {
  if (!img) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center" onClick={onClose}>
      <img src={img} alt="Enlarged" className="max-w-full max-h-full" />
    </div>
  );
}

export default ImageModal;
