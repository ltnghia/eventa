"use client";

import { useEffect } from "react";

export default function ImageModal({ isOpen, onClose, image, onPrev, onNext }) {

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClose, onPrev, onNext]);
    if (!isOpen || !image) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="bg-white p-4 rounded-lg max-w-2xl w-full relative"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-8"><img src={image.src} alt={image.caption} className="w-full  rounded" /></div>
                <p className="mt-2 p-4 text-start text-gray-700 max-h-[30vh] overflow-auto">{image.caption}</p>
                <button
                    className="absolute text-[2em] top-1 right-3 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    &times;
                </button>
                {/* Prev/Next Controls */}
                <button
                    className="absolute text-[1.5em] left-[-15%] top-1/2 h-16 w-16 -translate-y-1/2 text-white bg-black bg-opacity-70 hover:bg-opacity-60 p-2 rounded-full"
                    onClick={()=>onPrev()}
                >
                    ◀
                </button>
                <button
                    className="absolute text-[1.5em] right-[-15%] top-1/2  h-16 w-16 -translate-y-1/2 text-white bg-black bg-opacity-40 hover:bg-opacity-60 p-2 rounded-full"
                    onClick={()=>onNext()}
                >
                    ▶
                </button>
            </div>
        </div>
    );
}