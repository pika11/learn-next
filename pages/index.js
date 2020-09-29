import { BigHead } from "@bigheads/core"

export default function Index() {
	return (
		<div>
			<div className="">
				<h1 className="">
					Learn NEXT.JS by doing
				</h1>
				<p>
					learn by doing is the best way
					yo learn
				</p>
				<p>
					"doing.... what!?", you ask?
				</p>
			</div>
			<div className="">
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
				<p>hey! I need your help!</p>
				<p>
					I'm Karm Xubergerg, I need you
					to creat a Next site for me
					now!
				</p>
				<p>
					It must have one page with the
					title "ToeBook"
				</p>
				<p>
					Toes will be the next big
					thing!, Hurry!
				</p>
				<img src="/images/nextjs-logo.svg" />
				<button>Start!</button>
			</div>
		</div>
	)
}
