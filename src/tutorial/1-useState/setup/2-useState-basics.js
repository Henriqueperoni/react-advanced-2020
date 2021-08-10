import React, { useState } from "react";

const UseStateBasics = () => {
    // const value = useState(1)[0];
    // const handler = useState(1)[1];
    // console.log(value, handler);
    const [text, setText] = useState("random title");

    const handleClick = () => {
        setText("hello people");
    };
    return (
        <React.Fragment>
            <h1>{text}</h1>
            <button button="type" className="btn" onClick={handleClick}>
                Change Title
            </button>
        </React.Fragment>
    );
};

export default UseStateBasics;
