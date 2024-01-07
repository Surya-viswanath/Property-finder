import React from 'react'
import React from 'react';
import { Card } from 'react-bootstrap';
function Propertylisting() {
  return (
    <div>
      <div className="row">
      {properties.map(property => (
        <div className="col-md-4" key={property.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={property.image} />
            <Card.Body>
              <Card.Title>{property.title}</Card.Title>
              <Card.Text>
                {property.description}
              </Card.Text>
              <Card.Text>Price: {property.price}</Card.Text>
              </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Propertylisting
