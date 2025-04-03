import React, { useEffect, useState } from 'react';
import { X, ChevronDown, Calendar, Wrench, Fuel, Tractor, Truck } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TractorProfile } from '../data/tractorProfiles';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getImagePath } from '@/lib/utils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface TractorImageCarouselProps {
  tractor: TractorProfile;
  onClose: () => void;
  initialSlide?: number;
}

const TractorImageCarousel: React.FC<TractorImageCarouselProps> = ({ 
  tractor, 
  onClose,
  initialSlide = 0
}) => {
  // Debug logging
  useEffect(() => {
    console.log("TractorImageCarousel rendering:", tractor.name);
    console.log("Images:", tractor.images);
    console.log("Fallback image:", tractor.image);
  }, [tractor]);

  // Apply the same image logic as in TractorCard
  const images = (tractor.images && tractor.images.length > 0)
    ? tractor.images
    : [tractor.image];
    
  const [showScrollHint, setShowScrollHint] = useState(true);
  
  // Hide scroll hint after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Generate random specs for humor
  const tractorSpecs = {
    horsepower: Math.floor(Math.random() * 300) + 50,
    fuelType: ['Diesel', 'Premium Diesel', 'Farm Moonshine', 'Corn Oil', 'Pure Grit'][Math.floor(Math.random() * 5)],
    topSpeed: `${Math.floor(Math.random() * 40) + 10} km/h (downhill with a tailwind)`,
    lifting: `${Math.floor(Math.random() * 5000) + 1000} kg (or one very surprised cow)`,
    transmission: ['Manual', 'Automatic', 'Semi-Automatic', 'Telepathic', '5-Speed with Reverse Psychology'][Math.floor(Math.random() * 5)],
    previousOwners: Math.floor(Math.random() * 5)
  };

  // Prevent scrolling on the background when the carousel is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Close button */}
      <Button 
        onClick={onClose} 
        variant="ghost" 
        size="icon" 
        className="absolute top-2 right-2 z-50 bg-black/40 text-white rounded-full hover:bg-black/60"
      >
        <X className="h-6 w-6" />
      </Button>
      
      {/* Image carousel */}
      <div className="relative h-[40vh]">
        <Swiper 
          initialSlide={initialSlide}
          className="h-full w-full"
          slidesPerView={1}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div 
                className="h-full w-full bg-center bg-cover flex items-center justify-center"
                style={{ backgroundImage: `url(${getImagePath(image || 'placeholder.svg')})` }}
              >
                {/* Fallback if image fails to load */}
                <img 
                  src={getImagePath(image || 'placeholder.svg')}
                  alt={`${tractor.make} ${tractor.model}`} 
                  className="hidden" 
                  onError={(e) => {
                    // If image fails, change background to placeholder
                    const target = e.currentTarget;
                    target.parentElement!.style.backgroundImage = `url('${getImagePath('placeholder.svg')}')`;
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Scroll down indicator */}
        {showScrollHint && (
          <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center animate-bounce text-white">
            <p className="text-sm font-medium mb-1">Swipe down for details</p>
            <ChevronDown className="h-6 w-6" />
          </div>
        )}
      </div>
      
      {/* Scrollable tractor information */}
      <div className="flex-1 bg-white rounded-t-3xl">
        <ScrollArea className="h-[60vh] w-full">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold mb-1">
              {tractor.make} {tractor.model}
            </h1>
            <p className="text-lg text-gray-500 mb-4">{tractor.age} years young</p>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">About Me</h2>
              <p className="text-gray-700">{tractor.bio}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Tractor Specs</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Wrench className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Horsepower</p>
                    <p className="font-medium">{tractorSpecs.horsepower} HP</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Fuel className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Fuel</p>
                    <p className="font-medium">{tractorSpecs.fuelType}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Truck className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Top Speed</p>
                    <p className="font-medium">{tractorSpecs.topSpeed}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Tractor className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Lifting Capacity</p>
                    <p className="font-medium">{tractorSpecs.lifting}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Wrench className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Transmission</p>
                    <p className="font-medium">{tractorSpecs.transmission}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Previous Owners</p>
                    <p className="font-medium">{tractorSpecs.previousOwners}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">What do you think?</h2>
            </div>
            
            <Button 
              onClick={onClose}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              Back to Browsing
            </Button>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default TractorImageCarousel;
