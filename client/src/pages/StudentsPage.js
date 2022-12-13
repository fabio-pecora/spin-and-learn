import React from 'react';
import videoBg from '../videos/video.mp4'
import './MissionStyle.css'
// import Course from './Course';

function StudentsPage(props) {
    return (
        <div className='mt-4' style={{display: "flex", paddingRight: 30}}>
            <div className="Mission" style={{width: "45%"}}>
                <div id='PricingpageDiv2'>
                    <div id="textOnImg">Class Information</div>
                </div>
                <h1 style={{color: "black"}}>Sign Up For Classes in 2023</h1>
                <p style={{color: "black"}}>Ready to introduce yourself to the wonderful world of table tennis?
                    Or maybe you/your child is looking to improve their already-impressive skills?
                    Whatever the age or skill level, our
                    programs are a great ways for everyone to practice Table tennis, get moving, meet new friends,
                    and have some fun!</p>
                <p style={{color: "black"}}>Every class is taught by one of our amazing coaches who will get to know you/your child and help them level up.
                    Our Training Program focuses on honing in on your Table Tennis ability through more personal coaching
                    that will help them improve their skill.Classes start at $520 for 13 weeks. Price varies by location and time, see sign up page for more details.
                </p>
            </div>
            <div id='PricingpageDiv1' style={{width: "50%"}}>
                <video className='students-video' src={videoBg} controls autoplay loop type="video/mp4" />
            </div>
            {/* <Course/> */}
        </div>
    );
}

export default StudentsPage;