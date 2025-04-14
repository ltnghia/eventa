"use client";

import { useState, useEffect } from "react";
import ImageModal from "./ImageModal";
import Papa from "papaparse";
import { imagePrefix } from "@/constant.js";

export default function Explore() {

    const [isOpen, setIsOpen] = useState(false);
    const [images, setImages] = useState([]);
    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
      };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentIndex(null);
    };
    // Load and parse CSV
    useEffect(() => {
        fetch(`${imagePrefix}/dataset/assets/data.csv`)
            .then((res) => res.text())
            .then((text) => {
                Papa.parse(text, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        console.log(result.data.length);
                        const parsed = result.data.map((row) => ({
                            src: `${imagePrefix}/dataset/assets/images/${row.image_index}.jpg`,
                            caption: row.caption,
                        }));

                        setImages(parsed);
                    },
                });
            });
    }, []);
    const showPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const showNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    const [currentIndex, setCurrentIndex] = useState(null);
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 max-h-[50vh] overflow-y-auto">
                {images.map((img, idx) => (
                    <div key={idx} className="cursor-pointer" onClick={() => openModal(idx)}>
                        <img src={img.src} alt={img.caption} className="rounded shadow" />
                    </div>
                ))}
            </div>

            <ImageModal isOpen={isOpen} onClose={closeModal}  image={images[currentIndex]} onPrev={showPrev} onNext={showNext} />
        </>
    );
}