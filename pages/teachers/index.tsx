import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next'

const TeachersPage: NextPage = ({
  
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <h1>Teachers WIP</h1>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      
    }
  }
}