import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Contents from './containers/Contents';
import { useState, useEffect } from 'react';

function App() {
  const [detail, setDetail] = useState(null);
  const [closestColors, setClosestColors] = useState([]);
  const [colorsList, setColorsList] = useState([]);
  const [search, setSearch] = useState({ searchTerm: '', searchResults: [] });
  const [category, setCategory] = useState({ name: '', colors: [] });
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
    setColorsList(randomColors);
  }, []);

  return (
    <div className="App">
      <Navbar colorsList={colorsList} setSearch={setSearch} setPage={setPage}/>
      <main>
        <Sidebar
          detail={detail}
          setDetail={setDetail}
          colorsList={colorsList}
          setClosestColors={setClosestColors}
          setCategory={setCategory}
          setPage={setPage}
        />
        <Contents
          colorsList={colorsList}
          detail={detail}
          setDetail={setDetail}
          setClosestColors={setClosestColors}
          closestColors={closestColors}
          search={search}
          setSearch={setSearch}
          category={category}
          page={page}
          setPage={setPage}
        />
      </main>
    </div>
  );
}

export default App;
