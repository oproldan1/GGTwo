/* eslint-disable max-classes-per-file */
import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }

  componentDidMount() {
    fetch('/games')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ result: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const dashboardStyle = {
      height: '100%',
      width: '100%',
      background: '#DB2955',
    };

    return (
      <div style={dashboardStyle}>
        <h1>Welcome to GoodGame Reviews</h1>
        <Container
          result={this.state.result}
        />
      </div>
    );
  }
}

const Container = (props) => {
  const containerStyle = {
    // display: 'flex',
    height: '100%',
    width: '100%',
    background: '#54494B',
  };
  return (
    <div style={containerStyle}>
      <Create />
      <ResultsDisplay result={props.result} />
    </div>
  );
};

const createStyle = {
  height: '500px',
  width: '500px',
  background: '#7E8287',
};
class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      genre: '',
      platform: '',
      review: '',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/games', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/JSON"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }

  render() {
    return (
      <div style={createStyle}>
        <h1>Create</h1>
        <form>
          <label>
            Title:
          </label>
          <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleChange(e)} required />
          <br />
          <label>
            Description:
          </label>
          <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} required />
          <br />
          <label>
            Genre:
          </label>
          <input type="text" name="genre" value={this.state.genre} onChange={(e) => this.handleChange(e)} required />
          <br />
          <label>
            Platform
          </label>
          <input type="text" name="platform" value={this.state.platform} onChange={(e) => this.handleChange(e)} required />
          <br />
          <label>
            Review:
          </label>
          <input type="text" name="review" value={this.state.review} onChange={(e) => this.handleChange(e)} required />
          <br />
          <input type="submit" value="submit" onClick={(e) => this.handleSubmit(e)} />
        </form>
      </div>
    );
  }
}

const ResultsDisplay = (props) => {
  const resultToDisplay = [];
  props.result.forEach((game) => {
    resultToDisplay.push(<Result key={`game-id-${game._id}`} {...game} />);
  });
  const resultsDisplayStyle = {
    width: '500px',
    height: '500px',
    background: '#B98389',
  };
  return (
    <div style={resultsDisplayStyle}>
      <h1>ResultsDisplay</h1>
      {resultToDisplay}
    </div>
  );
};

const Result = (props) => (
  <div>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <p>{props.genre}</p>
    <p>{props.platform}</p>
    <p>{props.review}</p>
  </div>
);

export default Dashboard;
