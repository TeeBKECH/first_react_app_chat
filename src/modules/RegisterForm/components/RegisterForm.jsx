import React, { Component } from 'react';
import { Button, FormBlock } from '../../../components';
import { Box, FormControl , OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Lock, Person, AlternateEmail } from '@mui/icons-material';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {
  render() {
    const success = false;
    return (
      <div>
        <div className="auth-top">
          <h2>Регистрация</h2>
          <p>Для входа в чат, Вам нужно зарегистрироваться</p>
        </div>
        <FormBlock>
          {!success ? (
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
                  id="email-input1"
                  placeholder="E-mail"
                  startAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="start"
                      >
                      <AlternateEmail />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
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
                  id="password-input2"
                  placeholder="Password"
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
                <OutlinedInput
                  id="password-input3"
                  placeholder="Repeat Password"
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
                  Зарегистрироваться
                </Button>
              </FormControl>
              <Link className="auth-link" to="/login">Войти в Аккаунт</Link>
            </Box>
          ) : (
            <div className="auth-success__block">
              <AdminPanelSettingsTwoToneIcon color="primary" sx={{ fontSize: 80 }} />
              <h3>Подтвердите свой аккаунт</h3>
              <p>На Вашу почту отпралено письмо с ссылкой на подтверждение регистрации</p>
            </div>
          )}
        </FormBlock>
      </div>
    );
  }
}
 
export default RegisterForm;