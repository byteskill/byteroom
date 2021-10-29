import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next'

const AdminsPage: NextPage = ({
  
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <h1>Admin WIP</h1>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      
    }
  }
}