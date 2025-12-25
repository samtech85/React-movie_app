
import './css/App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { MovieProvider } from './contexts/MovieContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MovieCard from './components/MovieCard';
import NavBar from './components/NavBar';

function App() {

    return (
        <MovieProvider>
            <NavBar />
    <main className="main-content">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            {/* <Route path='/movie' element={<MovieCard />} /> */}
        </Routes>
        
    </main>
    </MovieProvider>
    )
}
export default App;
