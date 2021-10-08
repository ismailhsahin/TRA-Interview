import React, { useState } from 'react';
import {
  Button, Form, Grid, Header, Image, Message, Segment,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { useHistory } from 'react-router-dom';
import validator from 'validator';
// eslint-disable-next-line import/no-unresolved
import '../form.css';
import kointra from '../images/kointra.png';
import onSubmit from '../services/onSubmit';

const LoginPage = () => {
  const [emailError, setEmailError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const validateEmail = (e) => {
    setEmail(e);

    if (validator.isEmail(e)) {
      setEmailError('');
    } else {
      setEmailError('Please enter in e-mail format');
    }
  };
  const customAlert = (mes) => {
    alert(mes);
  };

  const login = async () => {
    const data = await onSubmit(email, password);
    if (data?.status === 200) {
      const serializedState = JSON.stringify(data.data);
      localStorage.setItem('myData', serializedState);

      history.push('/home');
    } else {
      customAlert('Email veya şifre yanlış');
    }
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Image src={kointra} />
          {' '}
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              onChange={(e) => validateEmail(e.target.value)}
              fluid
              required
              name="email"
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <p className="error-div">
              {emailError}
            </p>
            <Form.Input
              onChange={(e) => setPassword(e.target.value)}
              fluid
              required
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button onClick={() => login()} color="yellow" fluid size="large">
              Login
            </Button>

          </Segment>
        </Form>

        <Message>
          New to us ?
          {' '}
          <a href="https://kointra.com/signup"> Sign Up</a>
        </Message>

      </Grid.Column>
    </Grid>
  );
};

export default LoginPage;
