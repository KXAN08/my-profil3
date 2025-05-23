import { useEffect, useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Serverdan noto‘g‘ri javob keldi');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError('Mahsulotlarni yuklashda xatolik yuz berdi.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-10 text-center"> Yuklanmoqda...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <ThemeToggle />
      <h2 className="text-xl font-semibold mb-4">Mahsulotlar</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-4 border rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
          >
            <h3 className="font-bold mb-1">{product.title}</h3>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
