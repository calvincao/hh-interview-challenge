import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Contents from './containers/Contents';
import { findClosestColors } from './helperFuncs';
import { useState, useEffect } from 'react';

function App() {
  const [view, setView] = useState(null);
  const [closestColors, setClosestColors] = useState([]);
  const [colors, setColors] = useState([]);
  const [search, setSearch] = useState({viewResults: false, searchResults: [], searchTerm: ''});

  useEffect(()=>{
    const randomColors = [];
    const generateColor = () => '#' + Math.floor(Math.random()*256**3).toString(16).padStart(6, '0');
    for (let i = 0; i < 100; i++){
      randomColors.push(generateColor())
    }
    setColors(randomColors);
  }, []);

  return (
    <div className="App">
      <Navbar colors={colors} setSearch={setSearch}/>
      <main>
        <Sidebar
          view={view}
          setView={setView}
          colors={colors}
          findClosestColors={findClosestColors}
          setClosestColors={setClosestColors}
          setSearch={setSearch}
        />
        <Contents
          colors={colors}
          view={view}
          setView={setView}
          setClosestColors={setClosestColors}
          findClosestColors={findClosestColors}
          closestColors={closestColors}
          search={search}
          setSearch={setSearch}
        />
      </main>
    </div>
  );
}

export default App;
