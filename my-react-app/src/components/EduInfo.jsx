import React from "react"
import "../styles/geninfo.css"
function EduInfo() {
    // const [state, useState] = 0;

    return (
        <>
        <h2>Education Information</h2>
    <div className="input-container">
        <input type="text" placeholder="School Name"/>
        <input type="text" placeholder="Title of Study"/>
        <input type="date" placeholder="Date of Study"/>
      </div>
        </>
    )
}
export default EduInfo;