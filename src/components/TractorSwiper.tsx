
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { tractorProfiles, TractorProfile } from "../data/tractorProfiles";
import TractorCard from "./TractorCard";
import SwipeButtons from "./SwipeButtons";
import MatchPopup from "./MatchPopup";
import ChatInterface from "./ChatInterface";
import { toast } from "sonner";

// Import Swiper styles
import "swiper/css";

const TractorSwiper: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMatch, setShowMatch] = useState(false);
  const [matchedTractor, setMatchedTractor] = useState<TractorProfile | null>(null);
  const [showChat, setShowChat] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  // Shuffle the tractor profiles to get a random order
  const shuffledProfiles = useRef([...tractorProfiles].sort(() => Math.random() - 0.5));

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

  const handleStartChat = () => {
    setShowMatch(false);
    setShowChat(true);
  };

  const handleBackToSwiping = () => {
    setMatchedTractor(null);
    setShowChat(false);
  };

  return (
    <div className="h-full w-full relative">
      {!showChat ? (
        <>
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
              onStartChat={handleStartChat}
              onClose={() => setShowMatch(false)}
            />
          )}
        </>
      ) : (
        matchedTractor && (
          <ChatInterface tractor={matchedTractor} onBack={handleBackToSwiping} />
        )
      )}
    </div>
  );
};

export default TractorSwiper;
