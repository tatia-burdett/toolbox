import React from 'react';
import Card from 'react-bootstrap/Card';
import './TopicCard.css';

function TopicCard() {

    return (
        <div className='card-container'>
            <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant='top' src='holder.js/100px180' />
                <Card.Body>
                    <Card.Title>Hello</Card.Title>
                    <Card.Text>Text here</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TopicCard