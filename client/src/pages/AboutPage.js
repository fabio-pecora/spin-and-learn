import React from 'react';
import Mission from '../pages/Mission';
import Blog from '../pages/Blog';
import img2 from '../images/About1.jpg';
import img3 from '../images/headshot.jpeg';

function AboutUsPage(props) {
	const profiles = [
		{
			image: "https://media.discordapp.net/attachments/1029905103693557790/1029905777793716274/IMG_20220625_212456_479.jpg?width=511&height=511",
			name: "Tahmina Munni",
			college: "CUNY - Hunter College",
			role: "Front-End Developer",
			email: "Tahmina.munni49@myhunter.cuny.edu"
		},
		{
			image: "https://media.discordapp.net/attachments/1049922561808543755/1049923950492258414/yasi2_copy.jpg?width=577&height=511",
			name: "Yasiris Ortiz",
			college: "CUNY - City College",
			role: "Back-End Developer",
			email: "yortizm000@citymail.cuny.edu"
		},
		{
			image: "https://media.discordapp.net/attachments/1017213901533888596/1052415581430763620/image.png",
			name: "Fabio Pecora",
			college: "CUNY - College of Staten Island",
			role: "Back-End Developer",
			email: "fabiopecora01@gmail.com"
		},
		{
			image: "https://media.discordapp.net/attachments/1052424931490676777/1052432676109430874/photo-1.jpg?width=940&height=1353",
			name: "Ahmai Chaney-Smith",
			college: "CUNY - Brooklyn College",
			role: "Front-End Developer",
			email: "ahmaichaney@gmail.com"
		}
	]
	return (
		<div className='AboutPage container'>
			<div className="about-us-page">
				<h1 className="textOnImg">Our Story</h1>
				<div className="about-paragraph">
					<p>Spin and Learn website was built by CTP students with the purpose of promoting table tennis into NYC Schools</p>
					<p style={{color: "gray"}}>
                        Table Tennis brings so many benefits to our communities, especially to kids and teenagers that are still in school.
                        <br/>
                        It’s both a moment of relaxation and of competition that can keep teenagers in a safe environment out of bad choices.
                        <br/>
                         It’s also a good way to stay healthy, and a healthy lifestyle keeps your brain healthy too. Another important feature of
                        <br/>
                          our programs is that it makes easy to make friends and learn from others.
                    </p>
				</div>

				<div className='profile-container'>
					{profiles.map((profile, key) => (
						<div key={key} className="profile">
							<img src={profile.image} alt="profile 1" />
							<h3 className='mt-2'>{profile.name}</h3>
							<p>{profile.role}</p>
							<p>{profile.college}</p>
							<p style={{ textTransform: "lowercase" }}>{profile.email}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default AboutUsPage;
