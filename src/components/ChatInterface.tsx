
import React, { useState, useEffect, useRef } from "react";
import { TractorProfile } from "../data/tractorProfiles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "tractor";
  timestamp: Date;
}

interface ChatInterfaceProps {
  tractor: TractorProfile;
  onBack: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ tractor, onBack }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `Hi there! I'm ${tractor.name}. Interested in making an offer?`,
      sender: "tractor",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getRandomResponse = () => {
    const randomIndex = Math.floor(Math.random() * tractor.responseMessages.length);
    return tractor.responseMessages[randomIndex];
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate typing delay before response
    setTimeout(() => {
      const tractorResponse: Message = {
        id: messages.length + 2,
        text: getRandomResponse(),
        sender: "tractor",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, tractorResponse]);
    }, 1500);
  };

  const formatBidMessage = (input: string) => {
    // Check if the message already contains a currency symbol
    if (/[€$£¥]/.test(input)) {
      return input;
    }
    
    // Try to find a number in the input
    const numberMatch = input.match(/\d+/);
    if (numberMatch) {
      const number = numberMatch[0];
      const index = input.indexOf(number);
      // Insert the Euro symbol before the number
      return input.slice(0, index) + "€" + input.slice(index);
    }
    
    // If no number found, just return the original input
    return input;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="bg-white border-b border-gray-200 p-4 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
            <img
              src={tractor.image}
              alt={tractor.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-sm">{tractor.name}</h3>
            <p className="text-xs text-gray-500">Online now</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                message.sender === "user"
                  ? "bg-tractr-green text-white rounded-tr-none"
                  : "bg-gray-200 text-gray-800 rounded-tl-none"
              }`}
            >
              <p>{message.sender === "user" ? formatBidMessage(message.text) : message.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex space-x-2">
          <Input
            placeholder="Send a bid or message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button onClick={handleSend} className="bg-tractr-green hover:bg-tractr-green/90">
            Send
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Hint: Try making an offer like "I'll give you €25,000" or "How about €30,000?"
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;
