export default function NextLogo({
	className,
	color,
}) {
	return (
		<img
			className={className}
			src={
				color == "black"
					? "/images/nextjs-logo.svg"
					: "/images/nextjs-logo-white.svg"
			}
		/>
	)
}
