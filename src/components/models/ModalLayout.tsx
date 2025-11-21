import Image from "next/image";
import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;     
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  flex items-center justify-center z-[99999] "  
>
      <div className="rounded-2xl py-[40px] px-0 md:px-5 w-full backdrop-blur-xl h-screen flex items-center justify-center shadow-xl relative bg-contain z-[10000] bg-center bg-no-repeat" 
       style={{
         backgroundImage: `
    linear-gradient(360deg, rgba(255, 255, 255, 0.9) 55%, transparent 100%),
    linear-gradient(90deg, rgba(26, 209, 185, 0.5) 0%, rgba(207, 181, 249, 1) 50%, rgba(158, 2, 255, 0.5) 80%)
  `,
      }}>
      <div className="wrapper">

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl cursor-pointer"
          onClick={onClose}
        >
          <Image
                            src="/assets/modalcross-icon.svg"
                            alt="cross icon"
                            width={32}
                            height={32}
                            className=""
                          />
        </button>

        {/* Modal Content */}
        {children}
      </div>
      </div>
    </div>
  );
}
