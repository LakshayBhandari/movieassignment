import React, { useState } from 'react';
import axios from 'axios';
import "./Home.css"
import { Link } from 'react-router-dom';

const Home = () => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSearch = async () => {
        setIsLoading(true);
        setIsError(false);
        const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=17cd668e`);
        if (response.data.Search) {
            setMovies(response.data.Search);
        } else {
            setIsError(true);
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className='home'>
            <div className='tdiv'>
                <h1 className='title'>Movie Search...</h1></div>
            <div className="search-container">
                <input type="text" className="input" placeholder="Type Movie Name...." value={query} onChange={handleChange} />
                <button onClick={handleSearch}>Search</button>
            </div>
            {isLoading ? (
                <div className="loader-container">
                    <div className="loader">
                        <span></span>
                    </div>
                </div>
            ) : (
                <div className="card-container">
                    {isError ? (
                        <div className="error-message">
                            No movies found. Please try another Movie...
                        </div>
                    ) : (
                        movies.map((movie) => (
                            <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: 'none' }} className="link">
                                <div key={movie.imdbID} className="card">
                                    <div className="card-image">
                                        <img src={movie.Poster} alt={movie.Title} />
                                    </div>
                                    <div className="card-content">
                                        <h2>{movie.Title}</h2>
                                        <p>Year: {movie.Year}</p>
                                        <p>Type: {movie.Type}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default Home;