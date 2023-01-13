// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Country/Country';
import Search from './Search/Search';
function App() {

  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        setItems(await response.json());
      } catch (e) {
        setError(e);
      }
    }

    fetchData();
  }, [])


  if (error) return error;

  return <div className="wrapper">

    <Search
      items={items}
      setFilteredItems={setFilteredItems}
    />

    <ul className="card-grid">
      {filteredItems.map(item =>
        <Country item={item} />
      )}
    </ul>

  </div >;
}

export default App;
