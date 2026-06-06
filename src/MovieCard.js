import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ title, description, posterURL, rating, onDelete, id }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <Card 
      className="movie-card h-100 shadow-sm" 
      style={{ cursor: 'pointer' }}
      onClick={handleCardClick}
    >
      <Card.Img 
        variant="top" 
        src={posterURL} 
        alt={title}
        style={{ height: 300, objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-1">{title}</Card.Title>
        <div className="rating mb-2">
          <span className="badge bg-warning text-dark">⭐ {rating}/10</span>
        </div>
        <Card.Text className="flex-grow-1">{description}</Card.Text>
        <Button 
          variant="outline-danger" 
          size="sm" 
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
          className="mt-auto"
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
