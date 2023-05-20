import React from 'react';
import './SignUp.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const SignUp: React.FC = () => {
    return(
        <Form className='basic-form'>
            <h1>Sign Up</h1>
            <Form.Group>
                <Form.Control className='basic-input' type='text' placeholder='First name' />
                <Form.Control className='basic-input' type='text' placeholder='Last name' />
            </Form.Group>
            <Form.Group>
                <Form.Control className='basic-input' type='tel' placeholder='Phone number' />
                <Form.Control className='basic-input' type='email' placeholder='Email' />
                <Form.Control className='basic-input' type='password' placeholder='Password' />
                <Form.Control className='basic-input' type='password' placeholder='Confirm password' />
            </Form.Group>
            <Button className='my-btn'>Sign up</Button>
        </Form>
    )
}