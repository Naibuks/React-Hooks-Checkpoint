import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const AddMovie = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseFloat(value) || '' : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.posterURL || formData.rating === '') {
      alert('Please fill in all fields!');
      return;
    }

    if (formData.rating < 0 || formData.rating > 10) {
      alert('Rating must be between 0 and 10!');
      return;
    }

    onAdd({
      id: Date.now(),
      ...formData
    });

    setFormData({ title: '', description: '', posterURL: '', rating: '' });
  };

  return (
    <div className="add-movie-section mb-4 p-3 border rounded bg-white">
      <h5 className="mb-3">➕ Add New Movie</h5>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter movie title..."
                value={formData.title}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Rating (0-10)</Form.Label>
              <Form.Control
                type="number"
                name="rating"
                min="0"
                max="10"
                step="0.5"
                placeholder="8.5"
                value={formData.rating}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows={3}
            placeholder="Enter movie description..."
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Poster URL</Form.Label>
          <Form.Control
            type="url"
            name="posterURL"
            placeholder="https://example.com/poster.jpg"
            value={formData.posterURL}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Movie
        </Button>
      </Form>
    </div>
  );
};

export default AddMovie;
