import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Header from './Header/Header';
import Loader from './Loader/Loader';
import Container from './Container/Container';

const Cast = lazy(() => import('./Cast/Cast'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};

export default App;
