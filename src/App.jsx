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
  const [page, setPage] = useState('');

  useEffect(()=>{
    // generate random unique numbers ranging from 0 - 255^3 representing all possible color values 
    // sort numbers and then transform them into hex color values
    const randomNums = new Set();
    const hexFromDecimal = (num) => '#' + num.toString(16).padStart(6, '0');
    const generateRandNum = () => Math.floor(Math.random()*256**3);
    for (let i = 0; i < 100; i++){
      let num = generateRandNum();
      while (randomNums.has(num)) num = generateRandNum();
      randomNums.add(num)
    }
    const randomColors = [...randomNums].sort((a,b) => a - b).map(num => hexFromDecimal(num))
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
          setCategory={setCategory}
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
          category={category}
        />
      </main>
    </div>
  );
}

export default App;
