import React from "react"
import "../styles/geninfo.css"
function Practical() {
    // const [state, useState] = 0;

    return (
        <>
            <h2>Practical Experience</h2>
            <div className="input-container">
                <input type="text" placeholder="Company Name" />
                <input type="email" placeholder="Position Title" />
                <textarea placeholder="Responsibliies" />
                <input type="date" placeholder="Start Date" />
                <input type="date" placeholder="End Date" />
            </div>
        </>
    )
}
export default Practical;