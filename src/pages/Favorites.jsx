import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import "../css/Favorites.css";
function Favorites() {
    const { Favorites } = useMovieContext();
    if (Favorites) {
        return <div className="favorites">
            <h1> Your Favorites </h1>
            <div className="movies-grid">
                {Favorites.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    }
    return <div className="favorites-empty">
        <h1> No favorites yet! </h1>
        <p> Add some favorites to get started </p>
    </div>
}

export default Favorites;