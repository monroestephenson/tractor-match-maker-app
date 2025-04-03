
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { tractorProfiles, TractorProfile } from "../data/tractorProfiles";
import TractorCard from "./TractorCard";
import SwipeButtons from "./SwipeButtons";
import MatchPopup from "./MatchPopup";
import { toast } from "sonner";

// Import Swiper styles
import "swiper/css";

// Add a test profile to verify rendering
const testProfile: TractorProfile = {
  id: 999,
  name: "Test Tractor 9000",
  age: 25,
  bio: "Testing rendering logic only.",
  image: "/lovable-uploads/162183d8-145d-44cf-97e8-68d40f7d43b5.png",
  images: [
    "/lovable-uploads/162183d8-145d-44cf-97e8-68d40f7d43b5.png",
    "/lovable-uploads/26755a37-8b7f-4499-86b8-7692c579c81c.png"
  ],
  make: "Test",
  model: "9000",
  responseMessages: ["This is a test tractor for rendering verification."]
};

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

  // Add our test profile at the beginning to ensure something renders
  const allProfiles = [testProfile, ...enhancedProfiles];
  
  // Shuffle the tractor profiles to get a random order
  const shuffledProfiles = useRef([...allProfiles].sort(() => Math.random() - 0.5));

  // Debug on mount
  useEffect(() => {
    console.log("TractorSwiper mounted");
    console.log("Number of profiles:", shuffledProfiles.current.length);
    console.log("First profile:", shuffledProfiles.current[0]);
  }, []);

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
    <div className="h-full w-full relative flex flex-col">
      <div className="flex-1 w-full overflow-hidden">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            console.log("Swiper initialized");
          }}
          onSlideChange={handleSwiperSlideChange}
          slidesPerView={1}
          className="w-full h-full"
          allowTouchMove={true}
        >
          {shuffledProfiles.current.map((tractor, idx) => (
            <SwiperSlide key={tractor.id || idx} className="h-full flex items-center justify-center">
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
