import React from 'react'
import { Card } from 'react-bootstrap'

function RestaurantCard(props) {
  return (
    <div>
        <Card style={{width: '18rem'}}>
        <Card.Img variant='top' src={props.item.photograph} />
        <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
            {props.item.neighborhood}
        </Card.Text>
        <Card.Title>
            {props.item.cuisine_type}
        </Card.Title>
        </Card.Body>

        </Card>
    </div>
  )
}

export default RestaurantCard