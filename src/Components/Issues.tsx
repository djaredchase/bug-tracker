import React, { useState } from 'react';
import './Issues.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { MyTable } from './Table';
import data from '../dummyData.json';

export const Issues: React.FC = () => {
    const [showSidePanel, setShowSidePanel] = useState<boolean>(false);
    const [issuesView, setIssuesView] = useState<string>('list');

    return (
        <div className='page-container'>
            <div className='page-header'>
                <h1>Issues</h1>
                <div className='dbl-btn-wrapper'>
                    <Button className='my-btn' onClick={() => setIssuesView('list')}>List view</Button>
                    <Button className='my-btn' onClick={() => setIssuesView('kanban')}>Kanban view</Button>
                </div>
            </div>
            <div className='page-toolbar'>
                <Form.Control className='basic-input search-input' type='text' placeholder='Search' />
                <DropdownButton id='dropdown-filter-1' title='Filter 1'>
                    <Dropdown.Item>dummy item</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id='dropdown-filter-2' title='Filter 2'>
                    <Dropdown.Item>dummy item</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id='dropdown-filter-3' title='Filter 3'>
                    <Dropdown.Item>dummy item</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id='dropdown-filter-4' title='Filter 4'>
                    <Dropdown.Item>dummy item</Dropdown.Item>
                </DropdownButton>
                <Button onClick={() => setShowSidePanel(!showSidePanel)}>design test</Button>
            </div>
            <div className='issues-container'>
                <div className='issues-display'>
                    {issuesView == 'list' && <MyTable data={data.issues} />}
                    {issuesView == 'kanban' && 'Kanban view'}
                </div>
                {showSidePanel &&
                    <div className='issues-side-panel'>
                        side panel for displaying details of a selected issue
                    </div>
                }
            </div>
        </div>
    )
}