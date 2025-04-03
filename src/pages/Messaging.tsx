import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const funnyResponses = [
  "That's a solid offer, but can you throw in a season pass to the next county fair?",
  "My owner says they need at least another €10,000 for all the custom mud flaps.",
  "Hmm, tempting. But I've got a barn full of admirers making similar offers.",
  "Are you kidding? My hydraulics alone are worth triple that!",
  "I like your style! But my owner says I'm worth my weight in premium diesel.",
  "That's flattering, but I've been appraised at much higher by the Tractor Dating Commission.",
  "Tell you what - add a lifetime supply of polish and we might have a deal!",
  "My owner just spat out their coffee laughing at that bid.",
  "I'll relay your offer, but I should warn you that I'm considered vintage in tractor circles.",
  "Interesting proposal! But my owner says their grandpa would haunt them if they sold me that cheap."
];

const Messaging = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { tractor } = location.state || {};
  const [messages, setMessages] = useState<{ text: string; sent: boolean }[]>([
    { text: `Hey there! I'm ${tractor?.name || "the tractor"} - ready to talk tractors and deals!`, sent: false },
  ]);
  const [newMessage, setNewMessage] = useState("");

  if (!tractor) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <h1 className="text-xl mb-4">No tractor selected!</h1>
        <Button onClick={() => navigate("/")}>Back to swiping</Button>
      </div>
    );
  }

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: newMessage, sent: true }]);
    setNewMessage("");
    
    // Simulate typing
    setTimeout(() => {
      // Select random response
      const response = funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
      setMessages(prev => [...prev, { text: response, sent: false }]);
    }, 1000);
    
    // Show toast if message contains bidding language
    if (newMessage.includes('€') || newMessage.toLowerCase().includes('offer') || 
        newMessage.toLowerCase().includes('bid') || newMessage.toLowerCase().includes('buy') || 
        newMessage.toLowerCase().includes('price') || newMessage.toLowerCase().includes('deal')) {
      toast.success("Your bid has been received!");
    }
  };

  return (
    <div className="flex flex-col h-[100vh] bg-gray-100 fixed inset-0 overflow-hidden">
      {/* Header */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4">
        <div className="flex items-center w-full">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate("/")} 
            className="mr-2"
          >
            <ArrowLeft />
          </Button>
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
              <img src={tractor.image} alt={tractor.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">{tractor.name}</h1>
              <p className="text-xs text-gray-500">Online now</p>
            </div>
          </div>
        </div>
      </header>

      {/* Message area */}
      <div className="flex-1 overflow-y-auto px-4">
        <div className="w-full mx-auto">
          {messages.map((message, i) => (
            <div 
              key={i} 
              className={`mb-4 flex ${message.sent ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`rounded-lg py-2 px-4 max-w-[80%] ${
                  message.sent 
                    ? 'bg-tractr-green text-white' 
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Send a bid or message..."
            className="flex-1 border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-tractr-green"
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
          />
          <Button 
            onClick={handleSendMessage} 
            className="bg-tractr-green hover:bg-tractr-green/90 rounded-l-none"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
