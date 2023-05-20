import React from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
    return (
        <Form className='basic-form'>
            <h1>Login</h1>
            <Form.Group>
                <Form.Control className='basic-input' type='email' placeholder='Email' />
                <Form.Control className='basic-input' type='password' placeholder='Password' />
            </Form.Group>
            <Button className='my-btn' >Login</Button>
            <Form.Group className='form-group-center'>
                <Link className='form-link' to='/signup'>Don't have an account?</Link>
                <Link className='form-link' to='/signup'>Forgot password?</Link>
            </Form.Group>
        </Form>
    )
}