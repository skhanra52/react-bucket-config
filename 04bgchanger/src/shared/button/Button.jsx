import React from "react";

function Button(props) {
    const {item, onClick} = props;
    // let item = props.item;
    // console.log("Click...", props.onClick)
    
    return (
        <>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:item}}
             onClick={() => onClick(item)}>{item}
             </button>
        </>
    )
}

export default Button;