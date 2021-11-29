import React, { Component } from 'react';
import { Button, FormBlock } from '../../../components';
import { Box, FormControl , OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Lock, Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  render() { 
    return (
      <div>
        <div className="auth-top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста войдите в свой аккаунт</p>
        </div>
        <FormBlock>
          <Box 
            component="form"
            sx={{
              '& > :not(style)': { mb: 2 },
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl fullWidth>
              <OutlinedInput
                id="username-input1"
                placeholder="Username"
                startAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="start"
                    >
                    <Person />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth>
              <OutlinedInput
                id="password-input1"
                placeholder="Password"
                type="password"
                startAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="start"
                    >
                    <Lock />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth>
              <Button className="login-btn" color="primary" variant="contained" size="large">
                Войти в Аккаунт
              </Button>
            </FormControl>
            <Link className="auth-link" to="/register">Зарегистрироваться</Link>
          </Box>
        </FormBlock>
      </div>
    );
  }
}
 
export default LoginForm;