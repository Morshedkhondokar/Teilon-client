import { useState } from "react";

const ImageGallery = ({ images, name, isNew, discount }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState(false);

  const handleThumbClick = (img) => {
    setMainImage(img);
    setImageLoaded(false);
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-3 lg:gap-4">
      {/* Thumbnails */}
      <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible pb-1 sm:pb-0">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => handleThumbClick(img)}
            className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
              mainImage === img
                ? "border-slate-800 shadow-md"
                : "border-slate-100 hover:border-slate-300"
            }`}
          >
            {!thumbLoaded && <div className="absolute inset-0 bg-slate-100 animate-pulse" />}
            <img
              src={img}
              alt={`${name} thumbnail ${i + 1}`}
              className="w-full h-full object-cover"
              onLoad={() => setThumbLoaded(true)}
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-1 aspect-3/4 rounded-2xl overflow-hidden bg-slate-100">
        {!imageLoaded && <div className="absolute inset-0 bg-slate-100 animate-pulse" />}
        <img
          src={mainImage}
          alt={name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              New
            </span>
          )}
          {discount && (
            <span className="bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm hover:bg-white hover:shadow-md transition-all duration-200 group">
          <svg className="w-4 h-4 text-slate-500 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;