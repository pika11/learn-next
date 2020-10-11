import { motion } from "framer-motion"

export default function RunButton({ text, onClick, className, isCalculating }) {
	return (
		<motion.button
			whileHover={{
				scale: 0.9,
			}}
			whileTap={{
				scale: 0.8,
			}}
			onClick={onClick}
			className={
				"bg-green-600 text-white my-8 py-4 px-8 font-bold text-lg round " +
				className
			}
		>
			{isCalculating ? (
				<svg
					className="animate-spin h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
					/>
				</svg>
			) : (
				text
			)}
		</motion.button>
	)
}
