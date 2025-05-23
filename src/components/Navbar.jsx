import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-800 dark:text-white">Home</Link>
          <Link to="/recipes" className="text-gray-800 dark:text-white">Recipes</Link>
          <Link to="/users" className="text-gray-800 dark:text-white">Users</Link>
          <Link to="/post" className="text-gray-800 dark:text-white">Post</Link>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link to="/login" className="text-gray-800 dark:text-white">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
