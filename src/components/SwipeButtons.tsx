
import React from "react";
import { Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SwipeButtonsProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const SwipeButtons: React.FC<SwipeButtonsProps> = ({ onSwipeLeft, onSwipeRight }) => {
  return (
    <div className="flex justify-center space-x-6 mt-6 mb-4">
      <Button 
        variant="outline" 
        size="icon"
        className="w-14 h-14 rounded-full bg-white border-2 border-red-500 text-red-500 hover:bg-red-50 shadow-md transition-transform active:scale-95"
        onClick={onSwipeLeft}
        aria-label="Swipe Left"
      >
        <X className="h-7 w-7" />
      </Button>
      
      <Button 
        variant="outline" 
        size="icon"
        className="w-14 h-14 rounded-full bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 shadow-md transition-transform active:scale-95"
        onClick={onSwipeRight}
        aria-label="Swipe Right"
      >
        <Heart className="h-7 w-7" />
      </Button>
    </div>
  );
};

export default SwipeButtons;
