import React from "react"
import "../styles/geninfo.css"
function GenInfo() {
    // const [state, useState] = 0;

    return (
        <>
        <h2>General Information</h2>
    <div className="input-container">
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="tel" placeholder="Phone Number"/>
      </div>
        </>
    )
}
export default GenInfo;