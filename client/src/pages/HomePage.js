import React from 'react';
import img1 from '../images/tableTennisImg.jpeg';

function HomePage(props) {
    return (
        <>
            <div>
                <img src={img1} alt="Image of table tennis table" id="theHomepageImg"></img>
                <div id="textOnImg">Table Tennis For NYC Schools</div>
                <div id="contactUs">Contact Us</div>
            </div>
        </>
    );
}
  
export default HomePage;