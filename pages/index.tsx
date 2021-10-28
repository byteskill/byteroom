import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Paper, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Byteroom</title>
      </Head>
      <div>
        <Paper style={{ padding: theme.spacing(2), margin: theme.spacing(2) }}>
          <Typography variant="h2">Your classroom, on super-powers.</Typography>
        </Paper>
      </div>
    </>
  )
}

export default Home
