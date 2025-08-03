import React, { useState } from 'react';
import './App.css';

// Component to display a greeting for a logged-in user
function UserGreeting() {
  return <h1>Welcome back</h1>;
}

// Component to display a greeting for a guest user
function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

// Component that handles conditional rendering of greetings
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// Button component for logging in
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// Button component for logging out
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// Main App component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial state is logged out

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default App;