import Mark from "../../components/bigheads/mark"
import Layout from "../../components/layout"

export default function Success() {
	return (
		<Layout>
			<div className="mt-2 w-full">
				<Mark />
			</div>
			<h1 className="text-4xl text-center">
				Challenges completed!
				<br />
				You are awesome!
			</h1>
			<p className="my-5 text-center">
				That was amazing! Next.JS is an amazing framework and I'm sure you'll
				create amazing things!
			</p>
		</Layout>
	)
}
