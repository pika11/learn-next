export default function CommandButton({ children, onClick, value }) {
	return (
		<button
			onClick={() => onClick(value)}
			className="px-6 py-3 mx-2 my-2 bg-gray-800 rounded-sm"
		>
			{children}
		</button>
	)
}
