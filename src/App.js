import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import initialMovies from './movies';
import './App.css';

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  // Filter movies based on title and rating
  const filteredMovies = movies.filter(movie => {
    const titleMatch = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const ratingMatch = ratingFilter === '' || movie.rating >= ratingFilter;
    return titleMatch && ratingMatch;
  });

  // Add new movie
  const handleAddMovie = (newMovie) => {
    setMovies(prev => [newMovie, ...prev]);
  };

  // Delete movie
  const handleDeleteMovie = (id) => {
    setMovies(prev => prev.filter(movie => movie.id !== id));
  };

  // Clear filters
  const handleClearFilters = () => {
    setTitleFilter('');
    setRatingFilter('');
  };

  return (
    <div className="app-container">
      <Container className="py-5">
        <header className="app-header text-center mb-5">
          <h1 className="display-4 fw-bold mb-2">🎬 Movie App</h1>
          <p className="lead text-muted">Discover, add, and filter your favorite movies and TV shows</p>
        </header>

        <AddMovie onAdd={handleAddMovie} />

        <Filter 
          titleFilter={titleFilter}
          ratingFilter={ratingFilter}
          onTitleChange={setTitleFilter}
          onRatingChange={setRatingFilter}
        />

        {(titleFilter || ratingFilter) && (
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <small className="text-muted">
              Showing {filteredMovies.length} of {movies.length} movies
            </small>
            <Button variant="outline-secondary" size="sm" onClick={handleClearFilters}>
              Clear Filters
            </Button>
          </div>
        )}

        <MovieList movies={filteredMovies} onDelete={handleDeleteMovie} />
      </Container>
    </div>
  );
}

export default App;
