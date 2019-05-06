import Link from 'next/link';

function Home() {
	return <div>
		<h1>Welcome to Next.js!</h1>
		<p>This was a quick static site demo!</p>
		<p>Go to <Link href="/about"><a>About</a></Link></p>
	</div>
}

export default Home
