import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginForm = ({form, onChange, onSubmit, className}) => (
  <form
    className={`c-login ${className}`}
    onSubmit={(e) => {e.preventDefault(); onSubmit();}}
  >
    {/* <header>IoE Hub</header>*/}
    <TextField
      id="email"
      label="Email"
      value={form.email}
      onChange={(e) => { onChange('email', e.target.value); }}
      fullWidth
      autoComplete={'off'}
    />
    <br/>
    <TextField
      id="password"
      label="Password"
      type="password"
      value={form.password}
      onChange={(e) => { onChange('password', e.target.value); }}
      fullWidth
    />
    <br/>
    <Button
      variant="raised"
      fullWidth
      type="submit"
    >
          Login
    </Button>
    {/* <GoogleLogin*/}
    {/* className="google-login"*/}
    {/* clientId="243415418271-3a2p0mcsj0og05rikuqd3r01rfm2b8r4.apps.googleusercontent.com"*/}
    {/* buttonText={"LOGIN WITH GOOGLE"}*/}
    {/* onSuccess={(response) => {console.log(response);}}*/}
    {/* onFailure={(response) => {console.log('failed', response);}}*/}
    {/* />*/}
  </form>
);

LoginForm.propTypes = {
  form: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default LoginForm;
