import { useEffect } from "react"

export default function Footer() {
	useEffect(() => {
		if (typeof twttr !== "undefined") twttr.widgets.load()
	}, [])

	return (
		<div className="pt-5 pb-3 flex-col items-center">
			<p className="text-xs text-center text-gray-300">
				suggestions, feedback and comments are greatly appreciated!
			</p>
			{typeof window !== "undefined" && (
				<div className="flex justify-around pt-2">
					<a
						href="https://twitter.com/PIKA11?ref_src=twsrc%5Etfw"
						className="twitter-follow-button"
						data-show-count="false"
					>
						Follow @PIKA11
					</a>
					<a
						href="https://twitter.com/intent/tweet?screen_name=PIKA11&ref_src=twsrc%5Etfw"
						className="twitter-mention-button"
						data-show-count="false"
					>
						Tweet to @PIKA11
					</a>
				</div>
			)}
		</div>
	)
}
