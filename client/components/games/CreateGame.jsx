import React, { useState } from 'react';
import '../../public/styles.css'

const CreateGame = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [platform, setPlatform] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/games', {
      method: 'POST',
      body: JSON.stringify({title, description, genre, platform}),
      headers: {
        "Content-Type": "application/JSON"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }

  return (
    <div>
      <strong>Create New Game:</strong>
      <form id='form'>
        <label>
          Title:
        </label>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.value)} required />
        <br />
        <label>
          Description:
        </label>
        <input type="text" name="description" value={description} onChange={(e) => setDescription(e.value)} required />
        <br />
        <label>
          Genre:
        </label>
        <input type="text" name="genre" value={genre} onChange={(e) => setGenre(e.value)} required />
        <br />
        <label>
          Platform:
        </label>
        <input type="text" name="platform" value={platform} onChange={(e) => setPlatform(e.value)} required />
        <br />
        <input type="submit" value="submit" onClick={(e) => this.handleSubmit(e)} />
      </form>
    </div>
  );
}

export default CreateGame;