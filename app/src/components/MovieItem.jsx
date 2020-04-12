import React from 'react';
import classnames from 'classnames';

class MovieItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            willWatch: false
        };
    }

    getButtonClassnames = () => {
        return classnames({
            btn: true,
            'btn-success': this.state.willWatch,
            'btn-secondary': !this.state.willWatch
        })
    }

    getButtonTitle = ()=> {
        return this.state.willWatch ? 'Remove will Watch' : 'Add will Watch';
    }

    handleClick = ()=> {
        const { movie, removeMovieToWillWatch, addMovieToWillWatch} = this.props;
        const willWatch = !this.state.willWatch;
        if(willWatch) {
            addMovieToWillWatch(movie);
        }else {
            removeMovieToWillWatch(movie);
        }

        this.setState({
            willWatch: willWatch
        })
    }

    render() {
        const { movie, removeMovie} = this.props;
        return (
            <div className="card">
                <img className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt="" />
                <div className="card-body">
                    <h6 className="card-title">{movie.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {movie.vote_average}</p>
                        <button type="button" className={this.getButtonClassnames()} onClick={this.handleClick}>
                            {this.getButtonTitle()}
                        </button>
                    </div>
                    <button type="button" onClick={() => removeMovie(movie)}>Delete movie</button>
                </div>
            </div>
        );
    }
}

export default MovieItem;