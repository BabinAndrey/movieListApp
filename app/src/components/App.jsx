import React from 'react';
import MovieItem from './MovieItem';
import MovieTabs from './MovieTabs';
import Pagination from './Pagination';
import { API_KEY_3 } from '../utils/api'
import '../stylesheets/common.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
      page: 1,
      total_pages: 0
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort_by !== this.state.sort_by || prevState.page !== this.state.page) {
      console.log("App didUpdate");
      this.getMovies();
    }
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

  updateSortBy = (value) => {
    this.setState({
      sort_by: value
    });
  }

  pageUp = () => {
    if (this.state.page < this.state.total_pages) {
      this.setState(function (state, props) {
        return {
          page: state.page + 1
        }
      });
    }
  }

  pageDown = () => {
    if (this.state.page > 1) {
      this.setState(function (state, props) {
        return {
          page: state.page - 1
        }
      });
    }
  }

  getMovies = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`).then(response => response.json()).then((data) => {
      this.setState({
        movies: data.results,
        page: data.page,
        total_pages: data.total_pages
      });
    });
  }

  render() {
    console.log("App render");
    return (
      <div>
        <div className="container content">
          <div className="movies">
            <MovieTabs sort_by={this.state.sort_by} updateSortBy={this.updateSortBy} />
            <div className="container">
              {
                this.state.movies.map((movie) => {
                  return (
                    <div key={movie.id} className="movie">
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
          <div className="watch-panel">
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
        <Pagination page={this.state.page} total_pages={this.state.total_pages} pageUp={this.pageUp} pageDown={this.pageDown} />
      </div>
    );
  }
}

export default App;
