import React from 'react';
import { moviesData } from '../moviesData'
import MovieItem from './MovieItem';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: moviesData,
      moviesWillWatch: [],
    };
  }

  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter((item) => item.id !== movie.id);
    this.setState({
      movies: updateMovies
    });
  }

  addMovieToWillWatch = (movie) => {
    let movies = [...this.state.moviesWillWatch];
    if(!movies.find(m=>m.id === movie.id)) {
      movies.push(movie);
      this.setState( {
        moviesWillWatch: movies
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {
                this.state.movies.map((movie) => {
                  return (
                    <div key={movie.id} className="col-6 mb-4">
                      <MovieItem  movie={movie} 
                                  removeMovie={this.removeMovie} 
                                  addMovieToWillWatch = {this.addMovieToWillWatch}
                      />
                    </div>);
                })
              }
            </div>
          </div>
          <div className="col-3">
            <p>Will Watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
