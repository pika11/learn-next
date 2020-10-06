import { useState } from "react"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"

import Layout from "../../components/layout"
import Mark from "../../components/bigheads/mark"
import NextLogo from "../../components/images/next-logo"

const CodeMirror = dynamic(
	() => import("../../components/challenges/code-mirror"),
	{ ssr: false }
)

export default function challenge2() {
	const [showFileStructure, setShowFileStructure] = useState(true)
	const [code, setCode] = useState("")

	const updateCode = (editor, data, value) => {
		setCode(value)
	}

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
				<p className="text-gray-300 text-center pb-8">
					The <NextLogo className="w-12 inline-block px-1" /> project was
					created, the folder structure will look similar to this. Now... edit
					the homepage!
				</p>
				<div className="w-full flex flex-col items-center">
					<AnimatePresence>
						{showFileStructure && (
							<motion.div
								initial={{ height: 0 }}
								animate={{ height: "20rem" }}
								exit={{ height: 0 }}
								className="w-5/6 bg-gray-800"
							>
								<ul>
									<li
										onClick={() => {
											setShowFileStructure(false)
										}}
									>
										app.js
									</li>
								</ul>
							</motion.div>
						)}
					</AnimatePresence>
					<AnimatePresence>
						{!showFileStructure && (
							<motion.div
								initial={{ height: 0 }}
								animate={{ height: "20rem" }}
								exit={{ height: 0 }}
								className="h-40 w-5/6"
							>
								<CodeMirror
									className="w-full h-full text-xl overflow-y-scroll"
									value={code}
									onBeforeChange={updateCode}
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</Layout>
		</>
	)
}
