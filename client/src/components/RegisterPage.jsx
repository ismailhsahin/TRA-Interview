import React from 'react';
import {
  Button, Form, Grid, Header, Image, Message, Segment,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import kointra from '../images/kointra.png';

const RegisterPage = () => {
  const a = 5;
  console.log(a);
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

            <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail address" />

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="yellow" fluid size="large">
              Login
            </Button>

          </Segment>
        </Form>

        <Message>
          New to us ?
          {' '}
          <a href="/register"> Sign Up</a>
        </Message>

      </Grid.Column>
    </Grid>
  );
};
export default RegisterPage;
