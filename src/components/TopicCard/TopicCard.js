import React from 'react';
import Card from 'react-bootstrap/Card';
import './TopicCard.css';
import img from '../../images/img.jpg'


function TopicCard() {

    return (
        <div className='card-container'>
            <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant='top' src={img} />
                <Card.Body>
                    <Card.Title>Hello</Card.Title>
                    <Card.Text>Text here</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TopicCard