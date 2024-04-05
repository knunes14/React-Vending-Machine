import React from "react";
import { Link } from 'react-router-dom';

function Chips() {
    return (
        <div>
            <h1>Chips</h1>
            <p>Delicious, crunchy, salty chips.</p>
            <img src="https://images.unsplash.com/photo-1694101493127-eca6dfef5011?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A bag of chips" className="chips-image" />
            <br />
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Chips;