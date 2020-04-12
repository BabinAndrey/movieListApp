import React from 'react';
import classnames from 'classnames'; 

class MovieTabs extends React.Component {

    handleClick = (value) => {
        return event => {
            this.props.updateSortBy(value);
        }
    }

    getClassLink = (value) => {
        return classnames({
            'nav-link': true,
            'active': this.props.sort_by === value
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.sort_by !== nextProps.sort_by ? true: false;
    }

    render() {
        console.log("MovieTabs render");

        return (
            <ul className="tabs nav nav-pills">
                <li className="nav-item">
                    <div className={this.getClassLink("popularity.desc")}
                        onClick={this.handleClick("popularity.desc")}
                    >Popularity desc</div>
                </li>
                <li className="nav-item">
                    <div className={this.getClassLink("revenue.desc")}
                        onClick={this.handleClick("revenue.desc")}>Revenue desc</div>
                </li>
                <li className="nav-item">
                    <div className={this.getClassLink("vote_average.desc")}
                        onClick={this.handleClick("vote_average.desc")}>Vote average desc</div>
                </li>
            </ul>
        );
    }
}

export default MovieTabs;