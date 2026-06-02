import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Filter = ({ titleFilter, ratingFilter, onTitleChange, onRatingChange }) => {
  return (
    <div className="filter-section mb-4 p-3 bg-light rounded">
      <h5 className="mb-3">🎬 Filter Movies</h5>
      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Search by Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter movie title..."
              value={titleFilter}
              onChange={(e) => onTitleChange(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Filter by Rating (Min)</Form.Label>
            <Form.Control
              type="number"
              min="0"
              max="10"
              step="0.5"
              placeholder="0-10"
              value={ratingFilter}
              onChange={(e) => onRatingChange(e.target.value ? parseFloat(e.target.value) : '')}
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default Filter;
