
import React from "react";
import { TractorProfile } from "../data/tractorProfiles";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface MatchPopupProps {
  tractor: TractorProfile;
  onStartChat: () => void;
  onClose: () => void;
}

const MatchPopup: React.FC<MatchPopupProps> = ({ tractor, onStartChat, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div className="bg-white rounded-xl p-6 w-full max-w-md animate-pop-in">
        <div className="text-center mb-6">
          <div className="text-3xl mb-2">🚜 It's a Match! 🚜</div>
          <p className="text-lg text-gray-700">
            Looks like you've found your farming soulmate!
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-tractr-green">
            <img
              src={tractor.image}
              alt={tractor.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center mb-6">
          <h3 className="font-bold text-xl">{tractor.name}</h3>
          <p className="text-gray-600">wants to talk about tractors with you</p>
        </div>

        <div className="flex flex-col space-y-3">
          <Button
            className="bg-tractr-green hover:bg-tractr-green/90 text-white"
            onClick={onStartChat}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Send a Message
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
          >
            Keep Browsing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MatchPopup;
