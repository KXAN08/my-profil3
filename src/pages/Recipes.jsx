import { useEffect, useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Serverda muammo bor');
        }
        return res.json();
      })
      .then((data) => {
        setRecipes(data.recipes);
        setLoading(false);
      })
      .catch((err) => {
        setError('Retseptlarni yuklashda xatolik yuz berdi.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-10 text-center"> Yuklanmoqda...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <ThemeToggle />
      <h2 className="text-xl font-semibold mb-4">Retseptlar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="p-4 bg-gray-200 dark:bg-gray-900 text-black dark:text-white rounded shadow"
          >
            <h3 className="font-bold text-lg mb-2">{recipe.name}</h3>
            <p className="text-sm">{recipe.instructions.slice(0, 150)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
