import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);



export const MovieProvider = ({ children }) => {
    const [Favorites, setFavorites] = useState([])
    
    useEffect(() => {
        const storedFavs = localStorage.getItem("Favorites");
        if (storedFavs) {
            setFavorites(JSON.parse(storedFavs));
        }
}, []);
    

    useEffect(() => {
        localStorage.setItem("Favorites", JSON.stringify(Favorites));
            }, [Favorites])


        const addtoFavorites = (movie) => {
                setFavorites(prev => [...prev, movie]);
            } 
        const removeFromFavorites = (movieId) => {
            setFavorites(prev => prev.filter(movie => movie.id !== movieId));
            }

            const isFavorite = (movieId) => {
                return Favorites.some(movie => movie.id === movieId);
            }


            const value = {
                Favorites,
                addtoFavorites,
                removeFromFavorites,
                isFavorite
            };

    return <MovieContext.Provider value = {value}>
        {children}
    </MovieContext.Provider>;
        }