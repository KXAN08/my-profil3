import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaBox, FaBook, FaSignInAlt, FaUtensils } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Users', path: '/users', icon: <FaUser /> },
    { name: 'Products', path: '/products', icon: <FaBox /> },
    { name: 'Posts', path: '/posts', icon: <FaBook /> },
    { name: 'Recipes', path: '/recipes', icon: <FaUtensils /> },
    { name: 'Login', path: '/login', icon: <FaSignInAlt /> },
  ];

  return (
    <motion.div
      animate={{ width: isOpen ? 200 : 60 }}
      className="fixed top-0 left-0 h-screen bg-gray-800 text-white flex flex-col z-50 shadow-md transition-all duration-300  "
    >
      <div className="flex items-center justify-between px-4 py-4 flex-wrap">
        <div className="text-xl font-bold text-blue-500">
          {isOpen ? 'MyProfile' : 'MP'}
        </div>
        <button
          onClick={toggleSidebar}
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      <nav className="flex-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center p-4 transition-colors duration-200 hover:bg-gray-700 ${
                isActive ? 'bg-blue-600 text-white' : ''
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            {isOpen && <span className="ml-4">{item.name}</span>}
          </NavLink>
        ))}
      </nav>
    </motion.div>
  );
};

export default Sidebar;
