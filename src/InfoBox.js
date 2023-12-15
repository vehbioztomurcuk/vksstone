// src/InfoBox.js
import React from 'react';
import { Card } from 'react-bootstrap';

const InfoBox = ({ title, text }) => {
  return (
    <Card className="card">
      <Card.Body className="card-body">
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-text">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfoBox;
