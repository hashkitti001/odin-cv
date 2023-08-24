import React from "react"

function Button(props){
    const buttonStyle = {
        color:props.color,
        fontSize: props.fontSize + 'px'
    }
    return (
        <button style={buttonStyle}>{props.text}</button>
    )

}
export {Button};