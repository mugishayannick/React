import React from 'react';
import './App.css';
import Card from './components/card/Card';
import data from '../../src/ui/data/data'
import NavBar from './pages/NavBar/NavBar';

function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
})    


  return (
    <div className="App">
      <NavBar />
      <div className="card">
        {cards}
      </div>
    </div>
  );
}

export default App;
