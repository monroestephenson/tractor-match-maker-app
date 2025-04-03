
import React from "react";
import { TractorProfile } from "../data/tractorProfiles";

interface TractorCardProps {
  tractor: TractorProfile;
}

const TractorCard: React.FC<TractorCardProps> = ({ tractor }) => {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg bg-white">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${tractor.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
        <h2 className="text-2xl font-bold">
          {tractor.make} {tractor.model}, {tractor.age}
        </h2>
        <p className="mt-2 text-sm opacity-90">{tractor.bio}</p>
      </div>
    </div>
  );
};

export default TractorCard;
