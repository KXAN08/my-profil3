import { useEffect, useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Serverdan noto‘g‘ri javob');
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch((err) => {
        setError('Postlarni yuklashda xatolik yuz berdi.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-10 text-center"> Yuklanmoqda...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <ThemeToggle />
      <h2 className="text-xl font-semibold mb-4">Postlar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded shadow"
          >
            <h3 className="font-bold text-lg mb-2">{post.title}</h3>
            <p className="text-sm">{post.body.slice(0, 150)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
