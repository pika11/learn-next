import { useRef, useState } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

import Layout from "../../components/layout"
import InfoModal from "../../components/challenges/info-modal"
import RunButton from "../../components/challenges/run-button"
import WrongSuccessGifs from "../../components/challenges/wrong-success-gifs"
import Mark from "../../components/bigheads/mark"

export default function challenge3() {
	const [isWrong, setIsWrong] = useState(false)
	const [success, setSuccess] = useState(false)
	const [isCalculating, setIsCalculating] = useState(false)
	const [sandboxUrl, setSandboxUrl] = useState("")

	const codeSandboxUrlInput = useRef()

	const router = useRouter()

	const openCodeSandbox = () => {
		codeSandboxUrlInput.current.focus()
		window.open(
			"https://codesandbox.io/s/learnnext-challenge3-ynzyy?file=/pages/index.js",
			"_blank"
		)
	}

	const submit = async () => {
		if (isCalculating) return
		setIsCalculating(true)
		setIsWrong(false)
		await new Promise((resolve) => setTimeout(resolve, 1000))
		if (!sandboxUrl) {
			submissionIsWrong()
		} else {
			try {
				const response = await fetch(sandboxUrl + "api/review")
				const data = await response.json()
				if (data.review) {
					setSuccess(data.review)
					await new Promise((resolve) => setTimeout(resolve, 5000))
					router.push("/challenges/success")
				} else {
					submissionIsWrong()
				}
			} catch (e) {
				submissionIsWrong()
			}
		}
	}

	const submissionIsWrong = () => {
		setIsCalculating(false)
		setIsWrong(true)
	}

	return (
		<>
			<InfoModal>
				<li className="mb-3">
					<strong>NextJS Pages:</strong> Creating pages and routes in NextJS is
					super easy, barely an inconvenience. You can read more about this{" "}
					<a
						className="text-blue-600 underline"
						href="https://nextjs.org/docs/basic-features/pages"
					>
						here.
					</a>
				</li>
			</InfoModal>
			<Layout>
				<div className="w-24 mt-4">
					<Mark />
				</div>
				<h1 className="text-lg pt-1 pb-2 font-bold">Challenge 3:</h1>
				<p className="text-gray-300 italic pb-4 text-center font-bold">
					Create an "About Us" (/about-us) page with the text
					"A&nbsp;Karm&nbsp;Xubergerg&nbsp;production"
				</p>
				<motion.button
					className="bg-blue-700 text-white py-3 px-4"
					onClick={openCodeSandbox}
					whileHover={{ scale: 0.9 }}
					whileTap={{ scale: 0.8 }}
				>
					Go To Code Editor
				</motion.button>
				<input
					ref={codeSandboxUrlInput}
					value={sandboxUrl}
					onChange={(e) => setSandboxUrl(e.target.value)}
					className="mt-5 p-3 w-5/6 bg-gray-800 rounded border border-white"
					type="text"
				/>
				<p className="my-2 text-center">
					Once completed, paste the url in the field above to your Sandbox's
					home web preview url (as shown in the picture)
				</p>
				<img className="w-5/6" src="/images/codesandbox-url.png" />
				<WrongSuccessGifs isWrong={isWrong} success={success} />
				<RunButton
					onClick={submit}
					isCalculating={isCalculating}
					text="Submit"
				/>
			</Layout>
		</>
	)
}
