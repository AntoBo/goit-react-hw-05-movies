import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Header from './Header/Header';
import HomePage from './pages/HomePage/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          {/* <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
