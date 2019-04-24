import React from 'react';
import './App.css';
import useStoreon from 'storeon/react';

const App: React.FC = () => {
  const { dispatch, user } = useStoreon('user');

  console.log(user);

  if (!user.isAuthenticated) {
    setTimeout(() => {
      dispatch('@user/login', { isAuthenticated: true });
    }, 1500);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{JSON.stringify(user)}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
