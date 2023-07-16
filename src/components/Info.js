import React from 'react'

export default function Info() {
	return (
		<div className="info">
			<img src="./icons/profile.jpg" className="profile-img"/>
			<span className="name">Ammar Hussein</span>
			<span className="description">Frontend Developer</span>
			<a className="website" >the website is comming soon</a>
			<div className="contact">
				<a className="email" href = "mailto:huswainamar@gmail.com">
				<img src="./icons/email-icon.png" className="contact-button-icon"/>
					Email
				</a>
				<a className="linkedin" href="https://www.linkedin.com/in/amar-husain-a4929127b/">
					<img src="./icons/linkedin-icon.png" className="contact-button-icon "/>
					LinkedIn
				</a>
			</div>
		</div>
	)
}