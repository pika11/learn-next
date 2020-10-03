import { useState } from "react"
import {
	AnimatePresence,
	motion,
} from "framer-motion"

import Info from "../icons/info"
import Close from "../icons/close"

export default function InfoModal({ children }) {
	const [showModal, setShowModal] = useState(
		false
	)
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
			<AnimatePresence>
				{showModal && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="
						bg-gray-800 shadow rounded-lg 
						fixed inset-0 m-10 z-10"
					>
						<div className="flex flex-row-reverse">
							<button onClick={modalControl}>
								<Close className="w-12 text-red-600 m-3" />
							</button>
						</div>
						<div className="flex justify-center">
							<div className="p-6 max-w-sm">
								<ul className="text-lg">
									{children}
								</ul>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
