import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const NotFound = () => {
  return (
    <div className="p-4 text-center">
      <ThemeToggle/>
      <h2 className="text-2xl font-bold mb-4">404 – Sahifa topilmadi</h2>
      <p className="mb-4">Siz qidirgan sahifa mavjud emas.</p>
      <Link to="/" className="text-blue-500 underline">Bosh sahifaga qaytish</Link>
    </div>
  );
};

export default NotFound;
