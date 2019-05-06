import Link from 'next/link';

function About() {
	return <div>
		<h1>About me</h1>
		<p>Hi, my name is Victor.</p>
		<p>Go to <Link href="/"><a>Home</a></Link></p>
	</div>
}

export default About
