
import React, { useState } from "react";
import { TractorProfile } from "../data/tractorProfiles";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TractorImageCarousel from "./TractorImageCarousel";

interface TractorCardProps {
  tractor: TractorProfile;
}

const TractorCard: React.FC<TractorCardProps> = ({ tractor }) => {
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

  return (
    <>
      <div 
        className="relative w-full h-full rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer"
        onClick={handleCardClick}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-300" 
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        
        {/* Image navigation buttons */}
        {images.length > 1 && (
          <>
            <Button
              onClick={prevImage}
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-1 w-8 h-8"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </Button>
            <Button
              onClick={nextImage}
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full p-1 w-8 h-8"
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
                className={`h-1.5 rounded-full transition-all ${
                  index === currentImageIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
          <h2 className="text-2xl font-bold">
            {tractor.make} {tractor.model}, {tractor.age}
          </h2>
          <p className="mt-2 text-sm opacity-90">{tractor.bio}</p>
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
