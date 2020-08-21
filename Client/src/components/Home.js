import React from 'react';
import HomeStyle from '../style/HomeStyle.css';
import blackNwhite1 from '../style/Images/HomeImg/blackNwhite1.jpg';
import blackNwhite2 from '../style/Images/HomeImg/blackNwhite2.jpg';

function Home() {
    return (
        <div className="homePageContainer">
            <h1>CAR CATALOG</h1>
            <h5>Please Login OR Signup</h5>
            <div className="imgsContainer">
                <img src={blackNwhite1} />
                <img src={blackNwhite2} />
            </div>
        </div>
    )
}
export default Home;