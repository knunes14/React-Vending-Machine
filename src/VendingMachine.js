import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <div className="vending-machine">
            <div className="text-container">
                <h1>Vending Machine Snacks</h1>
                <h3>Select a snack:</h3>
                <ul>
                    <li><Link to="/chips">Chips</Link></li>
                    <li><Link to="/candy">Candy</Link></li>
                    <li><Link to="/soda">Soda</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default VendingMachine;