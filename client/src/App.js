import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Hero from './pages/Hero.jsx';
import Class from './pages/Class.jsx';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard></Dashboard>} />
          <Route path='/heroes' element={<Hero></Hero>} />
          <Route path='/classes' element={<Class></Class>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
