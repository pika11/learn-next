import Head from "next/head"
import "../styles/index.css"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.png" />
				<script async src="https://platform.twitter.com/widgets.js"></script>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
