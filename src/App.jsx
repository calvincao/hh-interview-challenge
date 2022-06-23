import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CardContainer from './containers/CardContainer';
import Pagination from './components/Pagination';
import DetailView from './containers/DetailView'
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [view, setView] = useState(null);

  const [colors, setColors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;

  useEffect(()=>{
    const randomColors = [];
    const generateColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);
    for (let i = 0; i < 100; i++){
      randomColors.push(generateColor())
    }
    setColors(randomColors);
  }, []);

  const indOfLast = currentPage * perPage;
  const indOfFirst = indOfLast - perPage;
  const currentColors = colors.slice(indOfFirst, indOfLast)

  return (
    <div className="App">
      <Navbar/>
      <div id="main-body">
        <Sidebar/>
        <div className="contents">
          {!view ?
            <>
              <CardContainer colors={currentColors} setView={setView}/>
              <Pagination perPage={perPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalColors={colors.length}/>
            </>
            :
            <DetailView view={view} setView={setView}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
