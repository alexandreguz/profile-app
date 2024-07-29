import React from 'react';


interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }

function Modal({ isOpen, onClose, children }: CustomModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
      <div className="bg-white m-auto p-8">   

        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal