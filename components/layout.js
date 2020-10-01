export default function Layout({ children }) {
	return (
		<div className="flex justify-center">
			<div className="max-w-md px-2 flex-1">
				<div className="flex flex-col items-center">
					{children}
				</div>
			</div>
		</div>
	)
}
