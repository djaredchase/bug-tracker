import React from 'react';
import './Projects.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

export const Projects: React.FC = () => {
    return(
        <div className='projects-page'>
            <div className='projects-header'>
                <h1>Projects</h1>
                <Button className='my-btn'>Create project</Button>
            </div>
            <div className='projects-toolbar'>
                <Form.Control className='basic-input search-input' type='text' placeholder='Search'/>
            </div>
            <Table className='my-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Manager</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Project #1</td>
                        <td>First dummy project</td>
                        <td>D. Jared Chase</td>
                    </tr>
                    <tr>
                        <td>Project #2</td>
                        <td>Second dummy project</td>
                        <td>D. Jared Chase</td>
                    </tr>
                    <tr>
                        <td>Project #3</td>
                        <td>Third dummy project</td>
                        <td>D. Jared Chase</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}