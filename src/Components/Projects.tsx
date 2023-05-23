import React from 'react';
import './Projects.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MyTable } from './Table';
import data from '../dummyData.json';

export const Projects: React.FC = () => {
    return(
        <div className='page-container'>
            <div className='page-header'>
                <h1>Projects</h1>
                <Button className='my-btn'>Create project</Button>
            </div>
            <div className='page-toolbar'>
                <Form.Control className='basic-input search-input' type='text' placeholder='Search'/>
            </div>
            <MyTable data={data.projects} />
        </div>
    )
}