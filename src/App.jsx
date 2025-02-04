import { useEffect, useState } from 'react';
import './App.css';
import { url } from './utils/constant';
import Product from './componets/Product';
import Pagination from './componets/Pagination';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

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
    fetchData('50');
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  // Pagination Constant Variables
  const LENGTH = data?.length;
  const LIMITPERPAGE = 6;
  const START = currentPage * LIMITPERPAGE; // 0*3 = 0 / 1*3 = 3 / 2*3 = 6
  const END = START + LIMITPERPAGE;

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>PAGINATION</h1>
      <Pagination
        length = {LENGTH}
        limitPerPage = {LIMITPERPAGE}
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
        // prevButton = {}
        // nextButton = {}
      />

      <div className="product-container">
        {data.slice(START, END).map((item, index) => (
          <Product key={item.id} image={item.thumbnail} title={item.title} />
        ))}
      </div>
    </>
  );
}

export default App;
