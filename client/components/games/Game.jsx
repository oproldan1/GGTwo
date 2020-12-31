import React from 'react';
import '../../public/styles.css'

const Game = (props) => (
  <div className='game'>
    <h2>{props.title}</h2>
    <p>Description: {props.description}</p>
    <p>Genre: {props.genre}</p>
    <p> Platform: {props.platform}</p>
  </div>
);

export default Game;