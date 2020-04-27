import React from "react";

const LeadText = ({text}) => {
    return (
        <div className="flex-grow-1 d-flex justify-content-center align-items-center lead">
            {text}
        </div>
    );
};

export default LeadText;
