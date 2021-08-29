import React from 'react'
import { Card } from 'react-bootstrap'

function User({list}){
    return (
        <div>
            <Card  style={{width: "18rem",marginTop:"2rem"}}>
                <Card.Body>
                    <Card.Title>Name: {list.name}</Card.Title>
                    <Card.Text>UserName: {list.username}</Card.Text>
                    <Card.Text>Email: {list.email}</Card.Text>
                    <Card.Text>Address: {list.adress}</Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default User
