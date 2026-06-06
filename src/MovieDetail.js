import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';
import initialMovies from './movies';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const movie = initialMovies.find(m => m.id === parseInt(id));

  if (!movie) {
    return (
      <Container className="py-5 text-center">
        <h2>Movie not found</h2>
        <Button 
          variant="primary" 
          onClick={() => navigate('/')}
          className="mt-3"
        >
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <div className="movie-detail-container">
      <Container className="py-5">
        <Button 
          variant="outline-secondary" 
          onClick={() => navigate('/')}
          className="mb-4"
        >
          ← Back to Home
        </Button>

        <Row className="g-5">
          <Col lg={5}>
            <img 
              src={movie.posterURL} 
              alt={movie.title}
              className="img-fluid rounded shadow"
            />
            <div className="mt-4">
              <h3 className="mb-2">{movie.title}</h3>
              <div className="mb-3">
                <span className="badge bg-warning text-dark fs-6">⭐ {movie.rating}/10</span>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="trailer-section mb-5">
              <h4 className="mb-3">Trailer</h4>
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow">
                <iframe
                  src={movie.trailer}
                  title={`${movie.title} Trailer`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="description-section">
              <h4 className="mb-3">Description</h4>
              <p className="lead">{movie.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetail;
