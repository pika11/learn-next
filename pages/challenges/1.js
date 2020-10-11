import { useState } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

import Layout from "../../components/layout"
import InfoModal from "../../components/challenges/info-modal"
import RunButton from "../../components/challenges/run-button"
import WrongSuccessGifs from "../../components/challenges/wrong-success-gifs"
import Mark from "../../components/bigheads/mark"
import NextLogo from "../../components/images/next-logo"
import CommandButton from "../../components/challenges/1/command-button"
import Backspace from "../../components/icons/backspace"
import ArrowRight from "../../components/icons/arrow-right"

export default function challenge1() {
	const [command, setCommand] = useState([])
	const [isWrong, setIsWrong] = useState(false)
	const [success, setSuccess] = useState(false)
	const [isCalculating, setIsCalculating] = useState(false)

	const router = useRouter()

	const onCommandButtonClick = (text) => {
		if (text == "delete") {
			setCommand(command.filter((el, i, arr) => !(i == arr.length - 1)))
		} else if (text == "space") {
			setCommand([...command, "&nbsp;"])
		} else {
			setCommand([...command, text])
		}
	}

	const commandText = () => {
		return { __html: command.join("") }
	}

	const run = async () => {
		if (isCalculating) return
		setIsWrong(false)
		setIsCalculating(true)
		await new Promise((resolve) => setTimeout(resolve, 1000))
		const commandIsCorrect =
			command
				.filter((section) => !(section == "&nbsp;"))
				.reduce((acc, curr) => acc + curr, "") == "npxcreate-next-appToeBook"
		if (commandIsCorrect) {
			setSuccess(true)
			await new Promise((resolve) => setTimeout(resolve, 5000))
			router.push("/challenges/2")
		} else {
			setIsCalculating(false)
			setIsWrong(true)
		}
	}

	return (
		<>
			<InfoModal>
				<li className="mb-3">
					<strong>create-next-app:</strong> Similar to{" "}
					<code>create-react-app</code> but for Next.JS You can read more about
					this{" "}
					<a
						className="text-blue-600 underline"
						href="https://nextjs.org/docs/getting-started"
					>
						here.
					</a>
				</li>
				<li className="mb-3">
					<strong>npx:</strong> If you have npm 5.2 or greater you probably
					already have it installed. You can read more about this{" "}
					<a
						className="text-blue-600 underline"
						href="https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner"
					>
						here.
					</a>
				</li>
			</InfoModal>
			<Layout>
				<div className="w-24 mt-4">
					<Mark />
				</div>
				<h1 className="text-lg pt-1 pb-2 font-bold">Challenge 1:</h1>
				<p className="text-gray-300 italic pb-8 text-center font-bold">
					Create a <NextLogo className="inline-block w-16" /> project <br />
					named <strong>ToeBook</strong>
				</p>
				<div
					className="
					w-full h-40 flex items-center
					bg-gray-800 rounded-lg p-2
					overflow-x-scroll"
				>
					<p className="text-green-400 text-lg px-1">~</p>
					<p dangerouslySetInnerHTML={commandText()}></p>
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
					<CommandButton onClick={onCommandButtonClick} value="create">
						create
					</CommandButton>
					<CommandButton onClick={onCommandButtonClick} value="react">
						react
					</CommandButton>
					<CommandButton onClick={onCommandButtonClick} value="-">
						-
					</CommandButton>
					<CommandButton onClick={onCommandButtonClick} value="next">
						next
					</CommandButton>
					<CommandButton onClick={onCommandButtonClick} value="app">
						app
					</CommandButton>
					<CommandButton onClick={onCommandButtonClick} value="npx">
						npx
					</CommandButton>
					<CommandButton onClick={onCommandButtonClick} value="npm">
						npm
					</CommandButton>
					<CommandButton onClick={onCommandButtonClick} value="ToeBook">
						ToeBook
					</CommandButton>
					<CommandButton onClick={onCommandButtonClick} value="space">
						<div className="flex gap-x-1">
							<ArrowRight className="w-6" />
							(space)
						</div>
					</CommandButton>
					<CommandButton onClick={onCommandButtonClick} value="delete">
						<div className="flex gap-x-1">
							<Backspace className="w-6" />
							(delete)
						</div>
					</CommandButton>
				</div>
				<WrongSuccessGifs isWrong={isWrong} success={success} />
				<RunButton text="Run" onClick={run} isCalculating={isCalculating} />
			</Layout>
		</>
	)
}
