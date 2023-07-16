import React from 'react'
import Info from './Info.js'
import About from './About.js'
import Education from './Education.js'
import Skills from './Skills.js'
import Footer from './Footer.js'

export default function App() {
	return (
		<div className="card">
			<Info />
			<div className="lower-section-container">
				<About />
				<Education />
				<Skills />
			</div>
			<Footer />
		</div>
	)
}