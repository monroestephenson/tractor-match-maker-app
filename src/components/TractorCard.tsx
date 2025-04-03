import React, { useState, useEffect } from "react";
import { TractorProfile } from "../data/tractorProfiles";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TractorImageCarousel from "./TractorImageCarousel";
import { getImagePath } from "@/lib/utils";

interface TractorCardProps {
  tractor: TractorProfile;
}

const TractorCard: React.FC<TractorCardProps> = ({ tractor }) => {
  // Debug on mount
  useEffect(() => {
    console.log("TractorCard rendering:", tractor.name);
    console.log("Images:", tractor.images);
    console.log("Fallback image:", tractor.image);
  }, [tractor]);

  // Extract the images array from the tractor profile
  // Default to an array with just the main image if images array is absent or empty
  const images = (tractor.images && tractor.images.length > 0)
    ? tractor.images
    : [tractor.image];
    
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  const handleCardClick = () => {
    setShowCarousel(true);
  };

  // Ensure we always have a valid image URL
  const currentImageUrl = images[currentImageIndex] || 'placeholder.svg';

  return (
    <>
      <div 
        className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer border border-gray-200 transform transition-transform"
        onClick={handleCardClick}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${getImagePath(currentImageUrl)})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
        
        {/* Image navigation buttons */}
        {images.length > 1 && (
          <>
            <Button
              onClick={prevImage}
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-1 w-8 h-8"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </Button>
            <Button
              onClick={nextImage}
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-1 w-8 h-8"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </Button>
          </>
        )}

        {/* Image indicators */}
        {images.length > 1 && (
          <div className="absolute top-4 left-0 right-0 z-20 flex justify-center gap-1">
            {images.map((_, index) => (
              <div 
                key={index} 
                className={`h-1 rounded-full transition-all ${
                  index === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
          <h2 className="text-2xl font-bold mb-1">
            {tractor.make} {tractor.model}
          </h2>
          <p className="text-lg font-medium opacity-90">{tractor.age} years young</p>
        </div>
      </div>

      {/* Full-screen image carousel popup */}
      {showCarousel && (
        <TractorImageCarousel 
          tractor={tractor} 
          onClose={() => setShowCarousel(false)}
          initialSlide={currentImageIndex}
        />
      )}
    </>
  );
};

export default TractorCard;
