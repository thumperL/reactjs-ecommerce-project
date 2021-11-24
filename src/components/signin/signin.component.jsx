import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './signin.styles.scss';

class SingIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      
    };
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="SingIn" onSubmit={this.handleSubmit}>
        <h2>I already an account</h2>
        <span>Sing in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {' '}
            Sign in with Google {' '}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
};

export default SingIn;