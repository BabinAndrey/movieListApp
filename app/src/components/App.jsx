import React from 'react';
import { moviesData } from '../moviesData'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: moviesData
    };
  }

  render() {
    return (
      <div>{this.state.movies.map((movie) => {
        return <p key={movie.id}>{movie.title}</p>
      })}</div>
    );
  }
}

export default App;
