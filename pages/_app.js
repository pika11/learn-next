import Head from "next/head"
import "../styles/index.css"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<script async src="https://platform.twitter.com/widgets.js"></script>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
