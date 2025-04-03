import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TractorSwiper from './components/TractorSwiper';
import Messages from './pages/Messages';
import { Toaster } from '@/components/ui/toaster';
import './App.css';

function App() {
  return (
    <Router basename="/tractor-match-maker-app">
      <div className="h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<TractorSwiper />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
