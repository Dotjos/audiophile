import React from "react";

interface ImageGalleryProps {
  imageOne: string;
  imageTwo: string;
  imageThree: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  imageOne,
  imageTwo,
  imageThree,
}) => {
  return (
    <div className="grid md:h-[368px] lg:h-[592px] grid-cols-1 md:grid-cols-[40fr_60fr] lg:grid-cols-[45fr_55fr] md:auto-rows-fr md:grid-rows-2 gap-[20px] md:gap-5 lg:gap-8">
      {/* First Image */}
      <div className="h-[174px] md:h-full rounded-lg overflow-hidden">
        <img
          src={imageOne}
          alt="Gallery Image 1"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Second Image */}
      <div className="h-[174px] md:h-full rounded-lg overflow-hidden">
        <img
          src={imageTwo}
          alt="Gallery Image 2"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Third Image - Spans 2 rows with equal height */}
      <div className="h-[368px] md:row-span-2 md:col-start-2 md:row-start-1 md:h-full rounded-lg overflow-hidden">
        <img
          src={imageThree}
          alt="Gallery Image 3"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
};
