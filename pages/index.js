import React from 'react'
import Link from 'next/link'

class Home extends React.Component {
	state = {
		name: 'Victor'
	}
	render() {
		const { name } = this.state
		return (
			<div>
				<h1>Welcome to Next.js!</h1>
				<p>This was a quick static site demo!</p>
				<p>I'm {name}</p>
				<p>Go to <Link href="/about"><a>About</a></Link></p>
			</div>
		)
	}
}

export default Home
