/* eslint-disable max-classes-per-file */
import React from 'react';
import GameDisplay from './GameDisplay.jsx';
import CreateGame from './CreateGame.jsx';

const Dashboard = () => {
  


  return (
    <div>
      <h1>Welcome to GoodGame Reviews</h1>
      <CreateGame />
      <GameDisplay />
    </div>
  );

}

export default Dashboard;
