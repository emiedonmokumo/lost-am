import React, { useState } from "react";

export default function UploadForm() {
    const [images, setImages] = useState<any>([]);

    const handleImageUpload = (e: any) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file: any) => ({
            file,
            preview: URL.createObjectURL(file),
        }));
        setImages((prev: any) => [...prev, ...newImages].slice(0, 4)); // max 4 images
    };

    const handleDrop = (e: any) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        const newImages = files.map((file: any) => ({
            file,
            preview: URL.createObjectURL(file),
        }));
        setImages((prev: any) => [...prev, ...newImages].slice(0, 4));
    };

    return (
        <div className="w-full max-w-3xl flex flex-col items-center justify-center bg-white p-6">

            {/* Question */}
            <p className="text-gray-600 mb-4">
                Do you have documents, pictures of the lost item?
            </p>

            {/* Drag & drop area */}
            <label
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="w-full max-w-xl h-40 border-2 border-dashed border-purple-400 flex flex-col items-center justify-center rounded-xl cursor-pointer hover:bg-purple-50"
            >
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                />
                <div className="flex flex-col items-center text-purple-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 8l-3-3m3 3l3-3" />
                    </svg>
                    <p className="text-sm text-gray-600">Drop your image here, or browse</p>
                </div>
            </label>

            {/* Image previews */}
            <div className="flex space-x-5 mt-4">
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        className="w-20 h-20 rounded-md overflow-hidden bg-gray-200 flex items-center justify-center"
                    >
                        {images[index] ? (
                            <img
                                src={images[index].preview}
                                alt="preview"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
}
