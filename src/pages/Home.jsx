import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

 function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const loadPopularMovies = async () => {
                try {
                    const popularMovies = await getPopularMovies();
                    setMovies(popularMovies);
                } catch (error) {
                    console.error("Error fetching popular movies:", error);
                    setError("Failed to load movies...");

                }
                finally {}
            };
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        };
        fetchData();
        
    }, []);

       
    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return
        if(loading) return
        setLoading(true);

        try {
            const results = await searchMovies(searchQuery);
            setMovies(results);
            setError(null); 
        }
        catch (err) {
            setError("Failed to fetch search results.");
            console.error("Error searching movies:", err);
        }
        finally {
            setLoading(false);
        }
    }
    
    
 
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for a movie" 
            className="search-input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">
                Search
            </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? <div className="loading">loading...</div> : <div className="movies-grid">
            {movies.map(movie => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>}        
    </div>
}

export default Home;