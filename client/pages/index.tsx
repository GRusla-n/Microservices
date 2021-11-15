import { Typography } from '@mui/material';
import { NextPage } from 'next';
import axios from 'axios';

type Props = {
  currentUser: any
}

const LandingPage: NextPage<Props> = ({ currentUser }) => {
  console.log(currentUser);
  return <Typography variant="h3">Landing Page</Typography>;
};

LandingPage.getInitialProps = async () => {
  const response = await axios.get('/api/users/currentuser');

  return response.data;
};

export default LandingPage;
