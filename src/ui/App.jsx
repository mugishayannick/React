import React from 'react';
import './App.css';
// import ButtonLinkedin from './components/buttonLinkedin/ButtonLinkedin';
import ImageHeader from './pages/imageHeader/ImageHeader';
import Header from './pages/Header/Header';

function App() {
  return (
    <div className="App-container">
      <div>
      <ImageHeader />
      </div>
      
      <div>
      <Header />
      </div>
      
    </div>
  );
}

export default App;
