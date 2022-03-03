import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Students = () => {
    const [rows] = useState([
        {
            id: 1,
            name: "Atul",
            age: 25,
            course: "MERN",
            batch: "october"
        },

        {
            id: 2,
            name: "Rahul",
            age: 22,
            course: "MERN",
            batch: "November"
        },

        {
            id: 3,
            name: "Adity",
            age: 23,
            course: "MERN",
            batch: "September"
        },

        {
            id: 4,
            name: "Rinkal",
            age: 24,
            course: "MERN",
            batch: "September"
        },

        {
            id: 5,
            name: "Praju",
            age: 20,
            course: "MERN",
            batch: "December"
        }
    ])
    return (
        <>
            <div className='flex-students'>
                <span style={{ fontWeight: "bold" }}>Students Details</span>
                <span className='add-student'><NavLink to={'/students/desc'} style={{textDecoration:"none"}}>Add Students </NavLink></span>

            </div>
        <>
            <Table sx={{ maxWidth: 900 }} className="table-main">
        <TableHead >
          <TableRow >
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.course}  </TableCell>
              <TableCell align="right">{row.batch}</TableCell>
              <TableCell align="right"><NavLink to='/edit' style={{textDecoration:"none"}}> <i className="fa fa-pen-to-square"></i> </NavLink></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      </>

            

           
        </> 
    )
}

export default Students