import React from 'react';
import './App.css'; // Import CSS file for styling
import HomeImg from "./homeImage.jpg";
  
function App() {
  return (
    <div className="container">
      <h1>All the magic, all in one place!</h1>
      <p>Unleash the power of seamless event planning at your fingertips. Explore a world where creativity meets convenience as you craft personalized mood boards and effortlessly connect with top-tier event professionals photographers, caterers, and more. Say goodbye to event planning stress; it's time to bring your dreams to life, all in one magical place!</p>
      <div className="buttons">
        <button className="button" onClick={() => {}}>Login</button>
        <button className="button" onClick={() => {}}>Sign Up</button>
      </div>
      <img className="image" src={HomeImg} alt="Image" />
    </div>
  );
}

export default App;

