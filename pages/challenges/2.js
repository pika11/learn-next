import { useState } from "react"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"

import Layout from "../../components/layout"
import RunButton from "../../components/challenges/run-button"
import WrongSuccessGifs from "../../components/challenges/wrong-success-gifs"
import InfoModal from "../../components/challenges/info-modal"
import Mark from "../../components/bigheads/mark"
import NextLogo from "../../components/images/next-logo"
import Folder from "../../components/icons/folder"
import Document from "../../components/icons/document"

import styles from "../../styles/2.module.css"

const CodeMirror = dynamic(
	() => import("../../components/challenges/code-mirror"),
	{ ssr: false }
)

export default function challenge2() {
	const [isCalculating, setIsCalculating] = useState(false)
	const [isWrong, setIsWrong] = useState(false)
	const [success, setSuccess] = useState(false)
	const [activeWindow, setActiveWindow] = useState("finder")
	const [code, setCode] = useState(
		"export default function Index() {\n  return (\n    <h1>Hello</h1>\n  );\n}"
	)
	const router = useRouter()

	const updateCode = (editor, data, value) => {
		setCode(value)
	}

	const updateCursor = (editor, data) => {
		const restricted = [0, 1, editor.doc.size - 1, editor.doc.size - 2]
		if (restricted.includes(data.line)) {
			editor.doc.setCursor({ line: editor.doc.size - 3 })
		}
	}

	const previewContent = () => {
		const html = code.split("return (")[1].split(");")[0]
		return { __html: html }
	}

	const submit = async () => {
		if (isCalculating) return
		setIsCalculating(true)
		setIsWrong(false)
		setSuccess(false)
		await new Promise((resolve) => setTimeout(resolve, 1000))
		if (previewContent().__html.includes("<h1>ToeBook</h1>")) {
			setSuccess(true)
			await new Promise((resolve) => setTimeout(resolve, 3000))
			router.push("/challenges/3")
		} else {
			setIsCalculating(false)
			setIsWrong(true)
		}
	}

	return (
		<>
			<InfoModal>
				<li className="mb-3">
					<strong>React Components:</strong> Build block of React. You can read
					more about this{" "}
					<a
						className="text-blue-600 underline"
						href="https://reactjs.org/docs/components-and-props.html"
					>
						here.
					</a>
				</li>
				<li className="mb-3">
					<strong>jsx:</strong> html in javascript. Read more about this{" "}
					<a
						className="text-blue-600 underline"
						href="https://reactjs.org/docs/introducing-jsx.html"
					>
						here.
					</a>
				</li>
			</InfoModal>
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
				<div className="flex w-full justify-around">
					<button
						className="py-3 w-full bg-blue-900 border-white border-r"
						onClick={() => setActiveWindow("finder")}
					>
						Finder
					</button>
					<button
						className="py-3 w-full bg-blue-900 border-white border-r border-l"
						onClick={() => setActiveWindow("code")}
					>
						Code
					</button>
					<button
						className="py-3 w-full bg-blue-900 border-white border-l"
						onClick={() => setActiveWindow("preview")}
					>
						Output
					</button>
				</div>
				<div className="w-full flex flex-col items-center pb-6">
					<AnimatePresence>
						{activeWindow == "finder" && (
							<motion.div
								initial={{ height: 0 }}
								animate={{ height: "20rem" }}
								exit={{ height: 0 }}
								className="w-full bg-gray-800 overflow-hidden"
							>
								<ul className="p-6">
									<li>
										<div className="pb-2 flex items-center m-1">
											<Folder className="w-4 mr-2" />
											ToeBook
										</div>
										<ul className="pl-6">
											<li className="pb-1">
												<div className="flex items-center m-1">
													<Folder className="w-4 mr-2" />
													pages
												</div>
												<ul className="pl-6">
													<li
														onClick={() => {
															setActiveWindow("code")
														}}
													>
														<div className="flex items-center m-1">
															<Document className="w-4 mr-2" />
															<span className="underline cursor-pointer">
																index.js
															</span>
														</div>
													</li>
												</ul>
											</li>
											<li className="pb-1">
												<div className="flex items-center m-1">
													<Folder className="w-4 mr-2" />
													components
												</div>
											</li>
											<li className="pb-1">
												<div className="flex items-center m-1">
													<Folder className="w-4 mr-2" />
													public
												</div>
											</li>
											<li className="pb-1">
												<div className="flex items-center m-1">
													<Document className="w-4 mr-2" />
													package.json
												</div>
											</li>
										</ul>
									</li>
								</ul>
							</motion.div>
						)}
					</AnimatePresence>
					<AnimatePresence>
						{activeWindow == "code" && (
							<motion.div
								initial={{ height: 0 }}
								animate={{ height: "20rem" }}
								exit={{ height: 0 }}
								className="w-full h-40"
							>
								<CodeMirror
									className="w-full h-full overflow-y-scroll"
									onBeforeChange={updateCode}
									value={code}
									onCursor={updateCursor}
								/>
							</motion.div>
						)}
					</AnimatePresence>
					<AnimatePresence>
						{activeWindow == "preview" && (
							<motion.div
								initial={{ height: 0 }}
								animate={{ height: "20rem" }}
								exit={{ height: 0 }}
								className={
									"w-full h-40 bg-white text-black overflow-hidden " +
									styles.preview
								}
								dangerouslySetInnerHTML={previewContent()}
							></motion.div>
						)}
					</AnimatePresence>
				</div>
				<WrongSuccessGifs success={success} isWrong={isWrong} />
				<RunButton
					onClick={submit}
					isCalculating={isCalculating}
					text="Submit"
				/>
			</Layout>
		</>
	)
}
