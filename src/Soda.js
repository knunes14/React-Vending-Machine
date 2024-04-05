import React from "react";
import { Link } from 'react-router-dom';

function Soda() {
    return (
        <div>
            <h1>Soda</h1>
            <p>Refreshing bubbly soda.</p>
            <img src="https://images.unsplash.com/photo-1595026798575-cac0f1be4be6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A can of soda" className="soda-image" />
            <br />
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Soda;