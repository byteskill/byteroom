import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Button, List, ListItem, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const subjects = [
  'Math Class',
  'Spanish Class',
  'Italian Class',
  'English Class',
  'P.E. Class',
  'French Class',
  'German Class',
  'Geography Class',
  'Informatics Class',
  'Programming Class',
  'History Class',
  'Physics Class',
  'Chemistry Class'
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
          <List style={{ maxHeight: '78vh', overflow: 'auto' }}>
            {subjects.map(item => {
              return(
                <ListItem key={item}>
                  <Button color="info" variant="contained" style={{ width: '100%' }}>
                    <Typography variant="h4">{item}</Typography>
                  </Button>
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </div>
    </>
  )
}

export default Home
