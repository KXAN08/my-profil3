import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div className="p-4">
      <ThemeToggle/>
      <h2 className="text-xl font-semibold mb-4">Kirish</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block">Parol:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button  type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Kirish
        </button>
      </form>
    </div>
  );
};

export default Login;
