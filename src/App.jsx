import React, { useState } from 'react';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  if (user) return <Dashboard user={user} />;

  return (
    <div>
      {showLogin ? (
        <>
          <Login onLoginSuccess={setUser} />
          <p style={{ textAlign: 'center' }}>
            Don’t have an account?{' '}
            <span onClick={() => setShowLogin(false)} style={{ color: 'blue', cursor: 'pointer' }}>Register</span>
          </p>
        </>
      ) : (
        <>
          <Register onRegisterSuccess={setUser} />
          <p style={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <span onClick={() => setShowLogin(true)} style={{ color: 'blue', cursor: 'pointer' }}>Login</span>
          </p>
        </>
      )}
    </div>
  );
}

export default App;
