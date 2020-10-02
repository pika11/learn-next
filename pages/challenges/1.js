import { useState } from "react"
import {
	motion,
	AnimatePresence,
} from "framer-motion"

import Layout from "../../components/layout"
import Mark from "../../components/bigheads/mark"
import NextLogo from "../../components/images/next-logo"
import CommandButton from "../../components/challenges/1/command-button"
import Backspace from "../../components/icons/backspace"
import ArrowRight from "../../components/icons/arrow-right"
import Info from "../../components/icons/info"
import Close from "../../components/icons/close"

export default function challenge1() {
	const [command, setCommand] = useState([])
	const [showModal, setShowModal] = useState(
		false
	)

	const onCommandButtonClick = (text) => {
		if (text == "delete") {
			setCommand(
				command.filter(
					(el, i, arr) => !(i == arr.length - 1)
				)
			)
		} else if (text == "space") {
			setCommand([...command, "&nbsp"])
		} else {
			setCommand([...command, text])
		}
	}

	const commandText = () => {
		return { __html: command.join("") }
	}

	const run = () => {}

	const modalControl = () => {
		setShowModal(!showModal)
	}

	return (
		<>
			<div className="flex flex-row-reverse mt-1">
				<div className="justify-self-end">
					<button
						onClick={modalControl}
						className="m-3"
					>
						<Info className="w-8" /> Info
					</button>
				</div>
			</div>
			<Layout>
				<div className="w-24 mt-4">
					<Mark />
				</div>
				<h1 className="text-lg pt-1 pb-2 font-bold">
					Challenge 1:
				</h1>
				<p className="text-gray-700 italic pb-8 text-center">
					Create a{" "}
					<NextLogo className="inline-block w-16" />{" "}
					project <br />
					named <strong>ToeBook</strong>
				</p>
				{/* nice gif and continue button or gif error */}
				<div
					className="
					w-full h-40 flex items-center
					bg-gray-800 rounded-lg p-2"
				>
					<p className="text-green-500 text-lg px-1">
						~
					</p>
					<p
						className="text-white"
						dangerouslySetInnerHTML={commandText()}
					></p>
					<motion.div
						animate={{
							opacity: [0, 1],
						}}
						transition={{
							repeat: Infinity,
							ease: "linear",
							repeatType: "mirror",
							duration: 0.5,
						}}
						className="bg-gray-100 w-3 h-6"
					></motion.div>
				</div>
				<div
					className="flex gap-5 
						flex-wrap justify-center 
						mt-8"
				>
					<CommandButton
						onClick={onCommandButtonClick}
						value="create"
					>
						create
					</CommandButton>
					<CommandButton
						onClick={onCommandButtonClick}
						value="react"
					>
						react
					</CommandButton>
					<CommandButton
						onClick={onCommandButtonClick}
						value="-"
					>
						-
					</CommandButton>
					<CommandButton
						onClick={onCommandButtonClick}
						value="next"
					>
						next
					</CommandButton>
					<CommandButton
						onClick={onCommandButtonClick}
						value="app"
					>
						app
					</CommandButton>
					<CommandButton
						onClick={onCommandButtonClick}
						value="npx"
					>
						npx
					</CommandButton>
					<CommandButton
						onClick={onCommandButtonClick}
						value="npm"
					>
						npm
					</CommandButton>
					<CommandButton
						onClick={onCommandButtonClick}
						value="ToeBook"
					>
						ToeBook
					</CommandButton>
					<CommandButton
						onClick={onCommandButtonClick}
						value="space"
					>
						<div className="flex gap-x-1">
							<ArrowRight className="w-6" />
							(space)
						</div>
					</CommandButton>
					<CommandButton
						onClick={onCommandButtonClick}
						value="delete"
					>
						<div className="flex gap-x-1">
							<Backspace className="w-6" />
							(delete)
						</div>
					</CommandButton>
				</div>
				<button
					onClick={run}
					className="
				bg-green-600 text-white my-8 py-4 px-8
				 	font-bold text-lg round"
				>
					Run
				</button>
			</Layout>
			<AnimatePresence>
				{showModal && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="
						bg-gray-200 shadow rounded-lg 
						fixed inset-0 m-10"
					>
						<div className="flex flex-row-reverse">
							<button onClick={modalControl}>
								<Close className="w-12 text-red-600 m-3" />
							</button>
						</div>
						<div className="flex justify-center">
							<div className="p-6 max-w-sm">
								<ul className="text-lg">
									<li className="mb-3">
										<strong>
											create-next-app:
										</strong>{" "}
										Similar to{" "}
										<code>create-react-app</code>{" "}
										but for Next.Js You can read
										more about this{" "}
										<a
											className="text-blue-600 underline"
											href="https://nextjs.org/docs/getting-started"
										>
											here.
										</a>
									</li>
									<li className="mb-3">
										<strong>npx:</strong> If you
										have npm 5.2 or greater you
										probably already have it
										installed. You can read more
										about this{" "}
										<a
											className="text-blue-600 underline"
											href="https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner"
										>
											here.
										</a>
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
