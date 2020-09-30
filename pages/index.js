import { BigHead } from "@bigheads/core"

export default function Index() {
	return (
		<div className="flex justify-center">
			<div className="max-w-md px-2">
				<div className="flex flex-col items-center">
					<h1 className="text-3xl font-bold mt-8">
						Learn NEXT.JS by doing
					</h1>
					<p className="text-sm italic text-gray-800">
						learn by doing is the best way yo
						learn
					</p>
					<p className="font-mono text-lg mt-3">
						"doing.... what!?", you ask?
					</p>
				</div>
				<div className="flex content-center flex-col items-center">
					<div className="w-3/4 pt-8 pb-1">
						<BigHead
							accessory="none"
							body="chest"
							circleColor="blue"
							clothing="shirt"
							clothingColor="black"
							eyebrows="concerned"
							eyes="normal"
							faceMask
							faceMaskColor="black"
							facialHair="none"
							graphic="react"
							hair="afro"
							hairColor="orange"
							hat="none3"
							hatColor="red"
							lashes={false}
							lipColor="green"
							mask
							mouth="tongue"
							skinTone="light"
						/>
					</div>
					<p className="text-xl font-bold text-gray-800">
						"hey! I need your help!"
					</p>
					<p className="text-center my-6 text-gray-700">
						I'm{" "}
						<strong className="text-gray-900">
							Karm Xubergerg
						</strong>
						, I need you to creat a{" "}
						<img
							className="inline-block w-16 mx-2"
							src="/images/nextjs-logo.svg"
						/>{" "}
						site for me now!
					</p>
					<p className="text-center mb-16 text-gray-700">
						It must have one page with the title{" "}
						<strong className="text-gray-900">
							ToeBook
						</strong>
						<br />
						Toes will be the next big thing!,
						Hurry!
					</p>
					<button className="mb-16 bg-pink-700 w-40 h-10 rounded-lg text-white focus:outline-none">
						Start!
					</button>
				</div>
			</div>
		</div>
	)
}
