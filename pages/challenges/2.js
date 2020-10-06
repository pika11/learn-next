import Layout from "../../components/layout"
import Mark from "../../components/bigheads/mark"
import NextLogo from "../../components/images/next-logo"

export default function challenge2() {
	return (
		<>
			<Layout>
				<div className="w-24 mt-4">
					<Mark />
				</div>
				<h1 className="text-lg pt-1 pb-2 font-bold">Challenge 2:</h1>
				<p className="text-gray-300 italic pb-4 text-center font-bold">
					Create an h1 tag that says ToeBook in the main page
				</p>
			</Layout>
		</>
	)
}
