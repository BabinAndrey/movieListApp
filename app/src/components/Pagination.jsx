import React from 'react';
import '../stylesheets/common.css';

class Pagination extends React.Component {
    render() {
        const { page, total_pages, pageUp, pageDown } = this.props;
        return (
            <div className="pagination container"> 
                <button className="btn btn-primary" type="button" onClick={() => pageDown()}>Назад</button>
                <span>{`${page} from ${total_pages}`}</span>
                <button className="btn btn-primary" type="button" onClick={() => pageUp()}>Вперед</button>
            </div>
        );
    };
}

export default Pagination;