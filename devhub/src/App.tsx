import { useThemeStore } from './hook/useTheme';
import './App.css'
import { Link, Routes,Route } from 'react-router-dom';

function App() {
  const {theme, toggleTheme} = useThemeStore();
  return (
    <>
      <div className={theme === "dark" ? "bg-gray-900 text-zinc-200" : "bg-white text-black"}>
        <nav className="p-4 flex gap-4 border-b">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/articles">Articles</Link>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Welcome to DevHub 🚀</h1>} />
        <Route path="/projects" element={<h2>Projects Page</h2>} />
        <Route path="/articles" element={<h2>Articles Page</h2>} />
      
        </Routes>
      </div>
    </>
  )
}

export default App;
