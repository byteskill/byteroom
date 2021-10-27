import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import '@mui/material'
import { Container, Paper, Typography } from '@mui/material'
import theme from '../src/theme'

const Home: NextPage = () => {
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
