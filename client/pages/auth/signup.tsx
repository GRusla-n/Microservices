import { Button, OutlinedInput, Paper, styled, Typography } from '@mui/material';
import { FC, useState } from 'react';
import styles from '../../styles/Signup.module.css';
import axios from 'axios';
import BGImage from '../../components/BGImage';
import Router from 'next/router';

const Root = styled('div')({
  display: 'flex',
  zIndex: 1,
  width: '100%',
  height: '100%',
  position: 'fixed',
  justifyContent: 'center',
  alignItems: 'center',
});

const FormWrapper = styled('div')({
  backgroundColor: 'rgba(256, 256, 256, 0.9)',
  display: 'grid',
  gridTemplateColumns: '400px',
  padding: '20px',
  borderRadius: '5px',
});

type Error = {
  message: string,
  field: string,
}

const Signup: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Error[]>([]);

  const onSubmit = async () => {

    try {
      const response = await axios.post('/api/users/signup', {
        email,
        password
      });

      console.log(response.data);
      Router.push('/');
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data.errors);
    }

  };

  return (
    <>
      <Root>
        <FormWrapper>
          <Typography variant="h3" className={styles.wrapper}>Sign Up</Typography>
          <OutlinedInput
            error={errors?.some(({ field }) => field === 'email')}
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            sx={{ marginBottom: '20px' }}
          />
          {errors?.map(err => {
            if (err.field === 'email') {
              return <Typography variant="error" key={err.field}>{err.message}</Typography>;
            }
          })}
          <OutlinedInput
            error={errors?.some(({ field }) => field === 'password')}
            placeholder="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            sx={{ marginBottom: '20px' }}
            type="password"
          />
          {errors?.map(err => {
            if (err.field === 'password') {
              return <Typography variant="error" key={err.field}>{err.message}</Typography>;
            }
          })}
          <Button onClick={onSubmit}>Sign Up</Button>
        </FormWrapper>
      </Root>
      <BGImage/>
    </>
  );
};

export default Signup;
