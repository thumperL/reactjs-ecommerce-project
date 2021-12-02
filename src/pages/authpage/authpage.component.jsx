import React from 'react';
import SingIn from '../../components/signin/signin.component';
import SignUp from '../../components/SignUp/SignUp.component';
import './authpage.styles.scss';

const AuthPage = (props) => {
  return (
    <div className="AuthPage">
      <SingIn />
      <SignUp />
    </div>
  );
};

export default AuthPage;