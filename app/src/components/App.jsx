import React from 'react';
import MovieItem from './MovieItem';
import {API_KEY_3} from '../utils/api'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      moviesWillWatch: [],
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_3}`).then(response=>response.json()).then((data)=> {
      this.setState({
        movies: data.results
      });
    });
  }
  
  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter((item) => item.id !== movie.id);
    this.setState({
      movies: updateMovies
    });
  }

  addMovieToWillWatch = (movie) => {
    let updateMovies = [...this.state.moviesWillWatch, movie];
    this.setState({
      moviesWillWatch: updateMovies
    });
  }

  removeMovieToWillWatch = (movie) => {
    const updateMovies = this.state.moviesWillWatch.filter((item) => item.id !== movie.id);
    this.setState({
      moviesWillWatch: updateMovies
    });
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
                      <MovieItem movie={movie}
                        removeMovie={this.removeMovie}
                        addMovieToWillWatch={this.addMovieToWillWatch}
                        removeMovieToWillWatch={this.removeMovieToWillWatch}
                      />
                    </div>);
                })
              }
            </div>
          </div>
          <div className="col-3">
            <h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
            <ul className="list-group">
              {this.state.moviesWillWatch.map(movie => (
                <li key={movie.id} className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <p>{movie.title}</p>
                    <p>{movie.vote_average}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
