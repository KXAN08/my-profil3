import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { user } from '../static/index'; 
import ThemeToggle from '../components/ThemeToggle';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="p-4">
      <div className="flex gap-8 items-center justify-between">
        <h1 className="text-2xl font-bold">Bosh sahifa</h1>
              <div className="flex items-center space-x-3 mt-10 justify-center">
                <ThemeToggle />
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-10 h-10 object-cover border-2 border-blue-500 cursor-pointer"
          style={{ borderRadius: '40%' }}
          onClick={() => setModalOpen(true)}
        />
        <span className="text-gray-800 dark:text-white font-semibold hidden sm:inline-block">
          {user.name}
        </span>
        <button
          className="md:hidden text-2xl text-gray-700 dark:text-white ml-3"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      </div>

      <div className="w-[380px] mt-36 h-64 mx-auto dark:bg-slate-800 bg-gray-100 shadow rounded-3xl">
        <p className="pt-28 text-center text-[20px]">
          Xush kelibsiz! Bu dummyjson.com API bilan ishlovchi sayt.
        </p>
      </div>


      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={user.avatar}
              alt="Large Avatar"
              className="w-[350px] h-[350px] object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
