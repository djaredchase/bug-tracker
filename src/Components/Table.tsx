import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import './Table.css';

interface MyTableProps {
    data: Project[] | Issue[];
}

interface Project {
    name: string;
    description: string;
    manager: string;
}

interface Issue {
    id: string;
    title: string;
    summary: string;
    assignee: string;
    reporter: string;
    status: string;
}

export const MyTable: React.FC<MyTableProps> = ({ data }) => {
    return (
        <Table className='my-table'>
            <thead>
                <tr>
                    {
                        Object.keys(data[0]).map((item, index) =>
                            <th key={index}>{item}</th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((trItem, trIndex) =>
                        <tr key={trIndex}>
                            {
                                Object.values(trItem).map((tdItem, tdIndex) =>
                                    <td key={tdIndex}>{tdItem}</td>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}