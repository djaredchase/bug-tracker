import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Login } from './Components/Login';
import { SignUp } from './Components/SignUp';
import { Projects } from './Components/Projects';

export const App = () => {

  return (
    <>
      <h3>Will become Navbar</h3>
      <Container>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/issues' element={<h1>Issues Page</h1>} />
          <Route path='/:id' element={<h1>Issue Details Page</h1>} />
          <Route path='/dashboard' element={<h1>Dashboard Page</h1>} />
          <Route path='/admin' element={<h1>Admin Page</h1>} />
          <Route path='*' element={<Navigate to='/projects' />} />
        </Routes>
      </Container>
    </>
  )
}
