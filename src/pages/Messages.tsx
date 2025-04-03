import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TractorProfile } from '../data/tractorProfiles';

interface Message {
  id: string;
  text: string;
  fromUser: boolean;
  timestamp: number;
}

interface StoredMatch {
  tractor: TractorProfile;
  timestamp: number;
  messages: Message[];
}

const Messages: React.FC = () => {
  const navigate = useNavigate();
  const [matches, setMatches] = useState<StoredMatch[]>(() => {
    const stored = localStorage.getItem('tractorMatches');
    return stored ? JSON.parse(stored) : [];
  });
  const [selectedMatch, setSelectedMatch] = useState<StoredMatch | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Save matches to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tractorMatches', JSON.stringify(matches));
  }, [matches]);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedMatch?.messages?.length]);

  const handleBack = () => {
    navigate('/');
  };

  const handleMatchSelect = (match: StoredMatch) => {
    setSelectedMatch(match);
  };

  const generateMessageId = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  };

  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedMatch) return;

    const newMessage: Message = {
      id: generateMessageId(),
      text: messageInput,
      fromUser: true,
      timestamp: Date.now()
    };

    // Update both matches and selectedMatch
    setMatches(prevMatches => {
      const updatedMatches = prevMatches.map(match => 
        match.tractor.id === selectedMatch.tractor.id
          ? { ...match, messages: [...match.messages, newMessage] }
          : match
      );
      
      // Update selectedMatch to show the new message immediately
      const updatedSelectedMatch = updatedMatches.find(m => m.tractor.id === selectedMatch.tractor.id);
      if (updatedSelectedMatch) {
        setSelectedMatch(updatedSelectedMatch);
      }
      
      return updatedMatches;
    });

    setMessageInput('');

    // Simulate tractor response
    setTimeout(() => {
      const tractorResponse: Message = {
        id: generateMessageId(),
        text: selectedMatch.tractor.responseMessages[
          Math.floor(Math.random() * selectedMatch.tractor.responseMessages.length)
        ],
        fromUser: false,
        timestamp: Date.now()
      };

      // Update both matches and selectedMatch for the response
      setMatches(prevMatches => {
        const updatedMatches = prevMatches.map(match => 
          match.tractor.id === selectedMatch.tractor.id
            ? { ...match, messages: [...match.messages, tractorResponse] }
            : match
        );
        
        // Update selectedMatch to show the response immediately
        const updatedSelectedMatch = updatedMatches.find(m => m.tractor.id === selectedMatch.tractor.id);
        if (updatedSelectedMatch) {
          setSelectedMatch(updatedSelectedMatch);
        }
        
        return updatedMatches;
      });
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center shadow-sm">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleBack}
          className="mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold">Messages</h1>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Matches List */}
        <div className="w-1/3 border-r border-gray-200 bg-white overflow-y-auto md:w-72">
          {matches.length === 0 ? (
            <div className="p-6 text-center text-gray-500 h-full flex items-center justify-center">
              <div>
                <p className="text-5xl mb-4">🚜</p>
                <p className="font-medium mb-1">No matches yet</p>
                <p className="text-sm">Swipe right on some tractors!</p>
              </div>
            </div>
          ) : (
            matches.map(match => (
              <div
                key={match.tractor.id}
                onClick={() => handleMatchSelect(match)}
                className={`p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 border-b border-gray-100 transition-colors ${
                  selectedMatch?.tractor.id === match.tractor.id ? 'bg-green-50' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                  <img
                    src={match.tractor.image}
                    alt={match.tractor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 truncate">
                    {match.tractor.make} {match.tractor.model}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500 truncate max-w-[120px]">
                      {match.messages.length > 0
                        ? match.messages[match.messages.length - 1].text.slice(0, 25) + (match.messages[match.messages.length - 1].text.length > 25 ? '...' : '')
                        : 'Start the conversation!'}
                    </p>
                    <span className="text-xs text-gray-400">
                      {formatDate(match.timestamp)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Chat Area */}
        {selectedMatch ? (
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 bg-white border-b border-gray-200 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                <img
                  src={selectedMatch.tractor.image}
                  alt={selectedMatch.tractor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  {selectedMatch.tractor.make} {selectedMatch.tractor.model}
                </h3>
                <p className="text-xs text-gray-500">
                  {selectedMatch.tractor.age} years young • {selectedMatch.tractor.make}
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {selectedMatch.messages.length === 0 ? (
                <div className="h-full flex items-center justify-center text-center p-6">
                  <div>
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gray-200">
                      <img 
                        src={selectedMatch.tractor.image} 
                        alt={selectedMatch.tractor.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <p className="font-medium text-gray-700 mb-1">
                      You matched with {selectedMatch.tractor.make} {selectedMatch.tractor.model}!
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Start the conversation with a friendly message
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {selectedMatch.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.fromUser ? 'justify-end' : 'justify-start'}`}
                    >
                      {!message.fromUser && (
                        <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                          <img
                            src={selectedMatch.tractor.image}
                            alt={selectedMatch.tractor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                          message.fromUser
                            ? 'bg-green-600 text-white rounded-tr-none'
                            : 'bg-white text-gray-800 rounded-tl-none shadow-sm'
                        }`}
                      >
                        <p className="whitespace-pre-wrap break-words">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1 text-right">
                          {formatTimestamp(message.timestamp)}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messageEndRef} />
                </>
              )}
            </div>

            {/* Message Input */}
            <div className="p-3 bg-white border-t border-gray-200 flex gap-2 shadow-lg">
              <Input
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 rounded-full bg-gray-100 border-0 focus-visible:ring-green-500"
              />
              <Button 
                onClick={handleSendMessage} 
                size="icon" 
                className="rounded-full bg-green-600 hover:bg-green-700"
                disabled={!messageInput.trim()}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500 bg-gray-50">
            <div className="text-center">
              <p className="text-6xl mb-4">👋</p>
              <p className="font-medium mb-1">Select a match to start chatting</p>
              <p className="text-sm">Your messages will be saved</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages; 