import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import AuthPage from './pages/authpage/authpage.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  // 
  unsubscribeFromAuth = null;

  componentDidMount() {
    // Firebase auth listener.  Firebase will notify if the user auth has changed.
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state);
            
          });
          snapShot.data()
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/shop' element={<ShopPage />} />
          <Route exact path='/signin' element={<AuthPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
