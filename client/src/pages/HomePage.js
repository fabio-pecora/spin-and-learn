import React from 'react';
import img1 from '../images/tableTennisImg.jpeg';

function HomePage(props) {
    return (
        <>
            <div id='div1'>
                <img src={img1} alt="Image of table tennis table" id="theHomepageImg"></img>
            </div>
            <div id='div2'>
                <div id="textOnImg">Table Tennis For NYC Schools</div>
                <div id="contactUs">
                    <button id="contact">Contact Us</button>
                </div>  
            </div>
            <div id="div3">
                <p>Safe sport for students to play year-round</p>
                <p>Table tennis is a lifetime sport that is easy on the joints/body due to it being a low impact sport.</p>
                <p>Provide students with a lifetime of spin serves by connecting with Spin and Learn.</p>
            </div>
            <div id="div4">
                <p>Improve students' hand-eye coordination</p>
                <p>Not much equipment is required for table tennis (i.e. table, paddle, and ball), what is moreso required is concentration during each bout.</p>
                <p>With Spin and Learn students will understand what to concentrate on and how to best their oppents over the table.</p>
            </div>
            <div id="div5">
                <p>Stay up-to-date with Spin and Learn by joining our newsletter</p>
                <form>
                    <input type="text" id="email" name="email" placeholder='email'></input>
                    <input type="submit" value="JOIN"></input>
                </form>
            </div>
            <footer id="homepageFooter">
                <p>Spin and Learn is dedicated to getting table tennis in NYC schools</p>
                <p>© Spin and Learn 2022. All rights reserved.</p>
            </footer>
        </>
    );
}
  
export default HomePage;