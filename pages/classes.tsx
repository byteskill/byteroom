import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const subjects = [
  { name: 'Math Class',        next_class: 'Mon 9:00 am',  students_num:  20 },
  { name: 'Spanish Class',     next_class: 'Tue 9:00 am',  students_num:  20 },
  { name: 'Italian Class',     next_class: 'Mon 12:00 am', students_num: 20 },
  { name: 'English Class',     next_class: 'Tue 11:00 am', students_num: 20 },
  { name: 'P.E. Class',        next_class: 'Wed 9:00 am',  students_num:  20 },
  { name: 'French Class',      next_class: 'Tue 12:00 am', students_num: 20 },
  { name: 'German Class',      next_class: 'Mon 10:00 am', students_num: 20 },
  { name: 'Geography Class',   next_class: 'Mon 11:00 am', students_num: 20 },
  { name: 'Informatics Class', next_class: 'Wed 11:00 am', students_num: 20 },
  { name: 'Programming Class', next_class: 'Wed 12:00 am', students_num: 20 },
  { name: 'History Class',     next_class: 'Mon 13:00 am', students_num: 20 },
  { name: 'Physics Class',     next_class: 'Thu 9:00 am',  students_num:  20 },
  { name: 'Chemistry Class',   next_class: 'Thu 12:00 am', students_num: 20 },
  { name: 'Art Class',         next_class: 'Thu 13:00 am', students_num: 20 },
  { name: 'Science Class',     next_class: 'Wed 13:00 am', students_num: 20 },
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
                      <TableCell align="right">{subject.next_class}</TableCell>
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
