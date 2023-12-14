import React from "react";

const DataRenderer = ({receivedData}) => {
    const divStyle = {
        border: '2px solid #333', 
        padding: '10px',
        width: '60%', 
        height: '200px',
        margin: '0 auto',
    };

    return(
        <div
            className="form-control rounded"
            style={divStyle}
        >
            <p>Your input was: {receivedData}</p>
        </div>
    );
};

export default DataRenderer;