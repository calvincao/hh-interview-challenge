import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Contents from './containers/Contents';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [detail, setDetail] = useState(null);
  const [closestColors, setClosestColors] = useState([]);
  const [colorsList, setColorsList] = useState([]);
  const [search, setSearch] = useState({ searchTerm: '', searchResults: [] });
  const [category, setCategory] = useState({ name: '', colors: [] });
  const [page, setPage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    setPage('loading');
    // /colors fetches a preset array of 100 colors
    // to get random colors, fetch from /random
    axios.get('https://hh-color-server.herokuapp.com/colors')
      .then((res) => {
        setPage('');
        setColorsList(res.data);
      })
      .catch((err) => {
        setPage('');
        setError(true);
      })
  }, []);

  return (
    <div className="App">
      <Navbar colorsList={colorsList} setSearch={setSearch} setPage={setPage} />
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
          error={error}
        />
      </main>
    </div>
  );
}

export default App;
