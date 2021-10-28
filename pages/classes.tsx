import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const subjects = [
  { name: 'Math Class',        next_class: new Date('November 1, 2021 09:00'), students_num:  20 },
  { name: 'Spanish Class',     next_class: new Date('November 2, 2021 09:00'), students_num:  20 },
  { name: 'Italian Class',     next_class: new Date('November 1, 2021 12:00'), students_num: 20 },
  { name: 'English Class',     next_class: new Date('November 2, 2021 11:00'), students_num: 20 },
  { name: 'P.E. Class',        next_class: new Date('November 3, 2021 09:00'), students_num:  20 },
  { name: 'French Class',      next_class: new Date('November 2, 2021 12:00'), students_num: 20 },
  { name: 'German Class',      next_class: new Date('November 1, 2021 10:00'), students_num: 20 },
  { name: 'Geography Class',   next_class: new Date('November 1, 2021 11:00'), students_num: 20 },
  { name: 'Informatics Class', next_class: new Date('November 3, 2021 11:00'), students_num: 20 },
  { name: 'Programming Class', next_class: new Date('November 3, 2021 12:00'), students_num: 20 },
  { name: 'History Class',     next_class: new Date('November 1, 2021 13:00'), students_num: 20 },
  { name: 'Physics Class',     next_class: new Date('November 4, 2021 09:00'), students_num:  20 },
  { name: 'Chemistry Class',   next_class: new Date('November 4, 2021 12:00'), students_num: 20 },
  { name: 'Art Class',         next_class: new Date('November 4, 2021 13:00'), students_num: 20 },
  { name: 'Science Class',     next_class: new Date('November 3, 2021 13:00'), students_num: 20 },
]

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Byteroom - Classes</title>
      </Head>
      <div>
        <Paper style={{ padding: theme.spacing(2), margin: theme.spacing(2) }}>
          <Typography variant="h2">Classes</Typography>
          <TableContainer component={Paper} style={{ maxHeight: '78vh', overflow: 'auto' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Subject</TableCell>
                  <TableCell align="right">Next Class</TableCell>
                  <TableCell align="right">Students</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subjects.map((subject, i) => {
                  return(
                    <TableRow key={i}>
                      <TableCell component="th" scope="row">{subject.name}</TableCell>
                      <TableCell align="right">{
                        [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ][subject.next_class.getDay() - 1] +
                        ' ' + subject.next_class.getDate() + ' ' +
                        [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ][subject.next_class.getMonth()] +
                        ' ' + subject.next_class.getFullYear() + ', ' + subject.next_class.toLocaleTimeString() 
                      }</TableCell>
                      <TableCell align="right">{subject.students_num}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </>
  )
}

export default Home
