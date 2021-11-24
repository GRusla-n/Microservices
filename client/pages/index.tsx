import { Typography } from '@mui/material';
import { NextPage } from 'next';
import buildClient from '../api/build-client';

type Props = {
  currentUser: any
}

const LandingPage: NextPage<Props> = ({ currentUser }) => {
  return <Typography
    variant="h3">{currentUser ? 'You are signed in' : 'You are NOT signed in'}</Typography>;
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');

  return data;
};

export default LandingPage;
