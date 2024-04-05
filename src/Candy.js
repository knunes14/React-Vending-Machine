import React from "react";
import { Link } from 'react-router-dom';

function Candy() {
    return (
        <div>
            <h1>Candy</h1>
            <p>Sweet and sour gummy candy</p>
            <img src="https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sour gummy candy" className="candy-image"  />
            <br />
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Candy;