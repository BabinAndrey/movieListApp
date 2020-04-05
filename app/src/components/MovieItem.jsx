import React from 'react';

const MovieItem = props => {
    return (
        <div>
            <p>{props.movie.title}</p>
            <button type="button" onClick={() => props.removeMovie(props.movie)}>Delete movie</button>
        </div>
    );
}

export default MovieItem;