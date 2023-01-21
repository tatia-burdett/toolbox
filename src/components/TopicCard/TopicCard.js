import React from 'react';
import Card from 'react-bootstrap/Card';
import './TopicCard.css';
import img from '../../images/img.jpg'


function TopicCard({ topics }) {
    console.log(topics.title, 'TOPIC CARD')

    return (
        <div className='card-container'>
            <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant='top' src={img} />
                <Card.Body>
                    <Card.Title>{topics.title}</Card.Title>
                    <Card.Text>{topics.content}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TopicCard