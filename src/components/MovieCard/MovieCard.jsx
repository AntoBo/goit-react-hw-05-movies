import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovie } from '../../service/fetchAPI';

const MovieCard = () => {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const [movie, setMovie] = useState();
  const location = useLocation();
  const movieId = location.pathname.match(/[0-9]+$/)[0];
  useEffect(() => {
    fetchMovie(movieId)
      // .then(data => console.log(data.data))
      .then(data => setMovie(data.data))
      .catch(err => console.log(err))
      .finally(() => {
        //loader ends here
      });
  }, []);

  if (!movie) {
    return;
  }
  const { title, poster_path, vote_average } = movie;

  return (
    <div className="movieCard">
      <img src={BASE_IMG_URL + poster_path} width="300" alt={title}></img>
      <h1>{title}</h1>
      <p>User score: {vote_average * 10}%</p>
      <h2>Overview</h2>
      <p></p>
    </div>
  );
};

export default MovieCard;

// adult: false
// backdrop_path: "/hPEOBD7eeQh7plm9TYoECNkK4b3.jpg"
// belongs_to_collection: null
// budget: 0
// genres: [{id: 35, name: "Comedy"}, {id: 18, name: "Drama"}, {id: 10751, name: "Family"}]
// homepage: ""
// id: 826241
// imdb_id: "tt11924738"
// original_language: "es"
// original_title: "La familia perfecta"
// overview: "Lucía (Belén Rueda) is a woman for whom leading a model life and taking control of her life is the most important thing. Since she got married, she has focused all of her efforts on caring for her family, until achieving what for her is a perfect family. However, her entire world begins to collapse with the arrival of Sara (Carolina Yuste), the girlfriend of her son; a young girl with great freedom and without mincing words who has a very different family from what Lucia always dreamed of as a political family. Now, Lucia must accept that the perfect family was not exactly what she thought."
// popularity: 8.103
// poster_path: "/ejRrpBuWj8MNkFP7DUHZoqhuGmV.jpg"
// production_companies: [,…]
// production_countries: [{iso_3166_1: "ES", name: "Spain"}]
// release_date: "2021-12-03"
// revenue: 1401254
// runtime: 0
// spoken_languages: [{english_name: "Spanish", iso_639_1: "es", name: "Español"},…]
// status: "Released"
// tagline: ""
// title: "La familia perfecta"
// video: false
// vote_average: 7
// vote_count: 2
