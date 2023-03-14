import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Moviedetails.css"
const Moviedetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=17cd668e`);
      setMovie(response.data);
      setIsLoading(false);
    };
    fetchMovie();
  }, [id]);
  return (
    <div className='mdetails'>
      <div className='tdiv'>
        <h1 className='title'>Movie Details...</h1>
      </div>

      <div className='mdetails'>
        {isLoading ? (
          <div className="loader-containerd">
            <div className="loaderd"></div>
          </div>
        ) : (
          <div className="details-container">
            <div className="details-image">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="details-content">
              <h1>{movie.Title}</h1>
              <p>Year: {movie.Year}</p>
              <p>Rated: {movie.Rated}</p>
              <p>Runtime: {movie.Runtime}</p>
              <p>Genre: {movie.Genre}</p>
              <p>Director: {movie.Director}</p>
              <p>Actors: {movie.Actors}</p>
              <p>Plot: {movie.Plot}</p>
              <p>IMDB Rating: {movie.imdbRating}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Moviedetails