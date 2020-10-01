import { motion } from "framer-motion"

import Layout from "../../components/layout"
import Mark from "../../components/bigheads/mark"
import NextLogo from "../../components/images/next-logo"

export default function challenge1() {
	return (
		<Layout>
			<div className="w-24 mt-6">
				<Mark />
			</div>
			<h1 className="text-lg pt-1 pb-2 font-bold">
				Challenge 1:
			</h1>
			<p className="text-gray-700 italic pb-8">
				Create a{" "}
				<NextLogo className="inline-block w-16" />{" "}
				project
			</p>
			<div
				className="
				w-full h-40 flex items-center
				bg-gray-800 rounded-lg p-2"
			>
				<p className="text-white text-lg px-1">
					~
				</p>
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
			<div className="flex gap-2 flex-wrap">
				<button>create</button>
				<button>react</button>
				<button>-</button>
				<button>next</button>
				<button>app</button>
				<button>npx</button>
				<button>npm</button>
				<button>ToeBook</button>
			</div>
		</Layout>
	)
}
