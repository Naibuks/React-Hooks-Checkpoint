import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onDelete }) => {
  if (movies.length === 0) {
    return (
      <div className="text-center py-5">
        <p className="text-muted">No movies found. Try adding one or adjusting your filters!</p>
      </div>
    );
  }

  return (
    <Row className="g-4">
      {movies.map(movie => (
        <Col key={movie.id} xs={12} md={6} lg={4}>
          <MovieCard 
            id={movie.id}
            title={movie.title}
            description={movie.description}
            posterURL={movie.posterURL}
            rating={movie.rating}
            onDelete={onDelete}
          />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
