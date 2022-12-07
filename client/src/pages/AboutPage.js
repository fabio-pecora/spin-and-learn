import React from 'react';
import Mission from '../pages/Mission';
import Blog from '../pages/Blog';
import img2 from '../images/About1.jpg';
import img3 from '../images/headshot.jpeg';

function AboutUsPage(props) {
	return (
		<div className='AboutUsPage'>

			{/* <div id=''> */}
			{/* <img src={img2} alt="table tennis table" id="theaboutpageImg"></img> */}
			{/* </div> */}
			<div className="main" id='aboutpageDiv2'>
				<div id="textOnImg">Our Story!</div>

				<div className="OurTeam">
					<h1>Spin and Learn website was built by CTP students with the purpose of promoting table tennis into NYC Schools</h1>
				</div>
				{/* <div className= "profiles" id=''> */}
					{/* <div className="Teamprofile" > */}
						{/* <div> */}
						{/* <img src={img3} alt="profile 1" id='profile'></img> */}
						{/* </div> */}
				
						{/* <h3>Tahmina Munni</h3> */}
						{/* <p>Front-End Developer */}
						{/* CUNY - Hunter College */}
						{/* Tahmina.munni49@myhunter.cuny.edu  */}
					{/* </p> */}
					{/* </div> */}
				
				{/* </div> */}
			</div>


			{/* <Mission /> */}
			{/* <Blog /> */}
		</div>
	);
}

export default AboutUsPage;
