import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CardContainer from './containers/CardContainer';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [colors, setColors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(12);

  useEffect(()=>{
    const randomColors = [];
    const generateColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);
    for (let i = 0; i < 100; i++){
      randomColors.push(generateColor())
    }
    setColors(randomColors);
  }, []);
  
  return (
    <div className="App">
      <Navbar/>
      <div id="main-body">
        <Sidebar/>
        <CardContainer colors={colors}/>
      </div>
    </div>
  );
}

export default App;
