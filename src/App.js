import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Trending from './Trending';
import Favourite from './Favourites';
import { GlobalStyle } from './styles'; // Ensure this path is correct

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle /> {/* Apply global styles */}
        <Navbar />
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/favourites" element={<Favourite />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
