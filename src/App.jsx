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
  const [category, setCategory] = useState({viewCategory: false, name: '', colors: []});

  useEffect(()=>{
    // generate random numbers ranging from 0 - 255^3 representing all possible color values 
    // sort numbers and then transform them into hex color values
    const randomNums = [];
    const hexFromDecimal = (num) => '#' + num.toString(16).padStart(6, '0');
    const generateRandNum = () => Math.floor(Math.random()*256**3);
    for (let i = 0; i < 100; i++){
      randomNums.push(generateRandNum())
    }
    const randomColors = randomNums.sort((a,b) => a - b).map(num => hexFromDecimal(num))
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
