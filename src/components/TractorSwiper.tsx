import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { tractorProfiles, TractorProfile } from "../data/tractorProfiles";
import TractorCard from "./TractorCard";
import SwipeButtons from "./SwipeButtons";
import MatchPopup from "./MatchPopup";
import { toast } from "sonner";

// Import Swiper styles
import "swiper/css";

// Update tractor profiles to include multiple images
const enhancedProfiles = tractorProfiles.map(tractor => {
  // Use the uploaded images
  const uploadedImages = [
    "/lovable-uploads/162183d8-145d-44cf-97e8-68d40f7d43b5.png",
    "/lovable-uploads/26755a37-8b7f-4499-86b8-7692c579c81c.png"
  ];
  
  // Generate between 2-4 random images for each tractor
  const numberOfImages = Math.floor(Math.random() * 3) + 2;
  const images = Array.from({ length: numberOfImages }, () => 
    uploadedImages[Math.floor(Math.random() * uploadedImages.length)]
  );
  
  return {
    ...tractor,
    images: images,
    image: images[0] // Set the original image as the first one for compatibility
  };
});

const TractorSwiper: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMatch, setShowMatch] = useState(false);
  const [matchedTractor, setMatchedTractor] = useState<TractorProfile | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  // Shuffle the tractor profiles to get a random order
  const shuffledProfiles = useRef([...enhancedProfiles].sort(() => Math.random() - 0.5));

  const handleSwipeLeft = () => {
    // Play reject animation if needed
    swiperRef.current?.slideNext();
    toast.error("Not your type of tractor!");
  };

  const handleSwipeRight = () => {
    // 80% chance of match
    const currentTractor = shuffledProfiles.current[currentIndex];
    if (Math.random() < 0.8) {
      setMatchedTractor(currentTractor);
      setShowMatch(true);
    } else {
      toast.info("They didn't swipe right on you. Keep looking!");
    }
    swiperRef.current?.slideNext();
  };

  const handleSwiperSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <div className="h-full w-full relative">
      <div className="h-[calc(100%-100px)] w-full">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSwiperSlideChange}
          slidesPerView={1}
          className="w-full h-full"
          allowTouchMove={true}
        >
          {shuffledProfiles.current.map((tractor) => (
            <SwiperSlide key={tractor.id} className="flex items-center justify-center">
              <TractorCard tractor={tractor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <SwipeButtons
        onSwipeLeft={handleSwipeLeft}
        onSwipeRight={handleSwipeRight}
      />
      
      {showMatch && matchedTractor && (
        <MatchPopup
          tractor={matchedTractor}
          onClose={() => setShowMatch(false)}
        />
      )}
    </div>
  );
};

export default TractorSwiper;
