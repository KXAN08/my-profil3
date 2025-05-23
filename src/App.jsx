import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import UsersList from './pages/UsersList';
import UserDetail from './pages/UserDetail';
import Posts from './pages/Posts';
import Recipes from './pages/Recipes';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarWidth = sidebarOpen ? 200 : 60;

  return (
    <Router>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div
        style={{ marginLeft: sidebarWidth }}
        className="transition-all duration-300 p-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
