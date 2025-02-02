import { useEffect, useState } from 'react';
import './App.css';
import { url } from './utils/constant';
import Product from './componets/Product';
import Pagination from './componets/Pagination';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (limit) => {
    try {
      setIsLoading(true);
      const resp = await fetch(url + limit);
      const data = await resp.json();
      setData(data.products);
    } catch (e) {
      console.log('Error fetchig data: ', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData('500');
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>PAGINATION</h1>
      <Pagination
      // length = {}
      // limitPerPage = {}
      // prevButton = {}
      // nextButton = {}
      />

      <div className="product-container">
        {data.map((item, index) => (
          <Product key={item.id} image={item.thumbnail} title={item.title} />
        ))}
      </div>
    </>
  );
}

export default App;
