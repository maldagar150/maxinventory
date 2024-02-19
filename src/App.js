import React from 'react';
import './App.css';

function App() {
 return (
    <div className="App">
      <h1>Login Page</h1>
      <form>
        <label>Email:</label>
        <input type="email" name="email" required />
        <br />
        <label>Password:</label>
        <input type="password" name="password" required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
 );
}

export default App;