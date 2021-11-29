import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { LoginForm, RegisterForm } from "../../modules";

import './Auth.scss';

const Auth = () => {

  return (
    <section className="auth">
      <Routes>
        <Route exact path="/" element={ <LoginForm /> }>
          <Route exact path="login" element={ <LoginForm /> } />
        </Route>
        <Route exact path="/register" element={ <RegisterForm /> } />
      </Routes>
    </section>
  )
}

export default Auth