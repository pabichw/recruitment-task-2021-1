import React from 'react';

const Album = ({data, onStarPress, onDeletePress}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src="assets/images/album-placeholder.jpg"/>
            </div>
            <div className="card-content">
                <p>{data.name}</p>
            </div>
            <div className="card-action">
                <button onClick={onDeletePress} className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">delete</i>
                </button>
                <button onClick={onStarPress} className={`right btn-floating btn-large waves-effect waves-light ${data.isTheBestOf ? 'teal' : 'grey'}`}>
                    <i className="material-icons">star</i>
                </button>
            </div>
        </div> 
    );
};

export default Album;