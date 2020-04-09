import React from 'react';

class MovieItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            willWatch: false
        };
    }

    render() {
        const { movie, removeMovie, addMovieToWillWatch, removeMovieToWillWatch } = this.props;
        return (
            <div className="card">
                <img className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt="" />
                <div className="card-body">
                    <h6 className="card-title">{movie.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {movie.vote_average}</p>
                        {
                            this.state.willWatch ?
                                <button type="button" className="btn btn-success" onClick={() => {
                                    this.setState({willWatch: false});
                                    removeMovieToWillWatch(movie);
                                }}>Remove will Watch</button>
                                :
                                <button type="button" className="btn btn-secondary" onClick={() => {
                                    this.setState({willWatch: true});
                                    addMovieToWillWatch(movie);
                                }}>Add will Watch</button>
                        }
                    </div>
                    <button type="button" onClick={() => removeMovie(movie)}>Delete movie</button>
                </div>
            </div>
        );
    }
}

export default MovieItem;