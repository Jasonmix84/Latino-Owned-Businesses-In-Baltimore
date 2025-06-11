import React from "react";

const Business = (props) => {
    return (
        <div className="Business">
           <h2>{props.name}</h2> {/* add props.name */}
           <h3>The Next thing I want is this</h3>
        </div>
    );
}
export default Business;