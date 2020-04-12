import React from 'react';

class Pagination extends React.Component {
    render() {
        const { page, total_pages, pageUp, pageDown } = this.props;
        return (
            <div> 
                <button className="btn btn-primary" type="button" onClick={() => pageDown()}>Назад</button>
                <span className="m-2">{`${page} from ${total_pages}`}</span>
                <button className="btn btn-primary" type="button" onClick={() => pageUp()}>Вперед</button>
            </div>
        );
    };
}

export default Pagination;