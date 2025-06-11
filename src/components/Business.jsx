import React from "react";

const Business = (props) => {
    return (
        <div className="Business">
           <h2>{props.name}</h2> {/* add props.name */}
            <img src={props.imgSrc} alt={props.name} width={344} heigfht={200} />
           <h3>{props.description}</h3>
           <h5>{props.address}</h5>
            <a href={props.website} target="_blank">
                Click to go to Their Website if There is One
            </a>
        </div>
    );
}
export default Business;