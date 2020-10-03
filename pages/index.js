import { useState } from "react"
import { motion } from "framer-motion"

import Link from "next/link"
import Layout from "../components/layout"
import Mark from "../components/bigheads/mark"
import NextLogo from "../components/images/next-logo"

export default function Index() {
	const variants = {
		default: {
			scale: [1, 0.9],
			duration: 0.8,
			transition: {
				duration: 1.5,
				repeat: Infinity,
				repeatType: "mirror",
			},
		},
		hover: {
			scale: 1.2,
		},
		tap: {
			scale: 0.7,
		},
	}

	const [
		buttonVariant,
		setButtonVariant,
	] = useState("default")

	const setDefault = () => {
		setButtonVariant("default")
	}

	return (
		<Layout>
			<h1 className="text-3xl font-bold mt-8">
				Learn{" "}
				<NextLogo className="inline-block w-32 mx-2 my-1 text-white" />{" "}
				by doing
			</h1>
			<p className="text-sm italic text-gray-200">
				"learn by doing" is the best way to learn
			</p>
			<p className="font-mono text-lg mt-3">
				"doing.... what!?", you ask?
			</p>
			<motion.div
				className="w-3/4 pt-8 pb-1"
				animate={{
					x: [0.2, -0.2],
				}}
				transition={{
					repeat: Infinity,
					repeatType: "mirror",
					duration: 1,
				}}
			>
				<Mark />
			</motion.div>
			<p className="text-xl font-bold text-gray-200">
				"hey! I need your help!"
			</p>
			<p className="text-center my-6 text-gray-300">
				I'm{" "}
				<strong className="text-gray-100">
					Karm Xubergerg
				</strong>
				, I need{" "}
				<strong className="text-gray-100">
					you
				</strong>{" "}
				to create a{" "}
				<NextLogo className="inline-block w-16 mx-2" />{" "}
				site for me now!
			</p>
			<p className="text-center mb-16 text-gray-300">
				It must have one page with the title{" "}
				<strong className="text-gray-100">
					ToeBook
				</strong>
				<br />
				Toes will be the next big thing!, Hurry!
			</p>
			<Link href="/challenges/1">
				<motion.a
					className="block cursor-pointer
							mb-16 bg-pink-600 px-16 py-3
							text-2xl text-white font-bold
							font-mono border-b-8 border-l border-r
							border-pink-900"
					variants={variants}
					animate={buttonVariant}
					onHoverStart={() =>
						setButtonVariant("hover")
					}
					onTap={() => setButtonVariant("tap")}
					onHoverEnd={setDefault}
					onTapCancel={setDefault}
				>
					Start!
				</motion.a>
			</Link>
		</Layout>
	)
}
