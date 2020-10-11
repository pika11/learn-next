export default function WrongSuccessGifs({ isWrong, success }) {
	return (
		<div className="flex flex-col items-center">
			{isWrong && (
				<img className="w-1/2 rounded-lg mt-4" src="/gifs/ahahah.gif" />
			)}
			{success && (
				<>
					<img className="w-1/2 rounded-lg mt-4" src="/gifs/clever.gif" />
					<p className="text-2xl text-center">Nice!!</p>
					<p className="text-center">loading next challenge...</p>
				</>
			)}
		</div>
	)
}
