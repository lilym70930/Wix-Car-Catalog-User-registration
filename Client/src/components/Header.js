import React from 'react';
import HeaderStyle from '../style/HeaderStyle.css';

const Header = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    let dateObj = new Date();
    let month = monthNames[dateObj.getMonth()];
    let day = String(dateObj.getDate()).padStart(2, '0');
    let year = dateObj.getFullYear();
    let output = month + ' ' + '\n' + day + ',' + ' ' + year;
    return (
        <div className="header">
            <span>{output}</span>
            <h1>CHOOSE YOUR CAR <br></br>
            You can filter by model, year and color
            </h1>
        </div>
    )
}

export default Header;

