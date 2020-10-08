import { Controlled } from "react-codemirror2"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/mode/jsx/jsx"

export default function CodeMirror({
	value,
	className,
	onBeforeChange,
	cursor,
	onCursor,
}) {
	return (
		<Controlled
			className={className}
			options={{
				mode: "jsx",
				theme: "material",
				lineNumbers: true,
				lineWrapping: true,
			}}
			value={value}
			onBeforeChange={onBeforeChange}
			cursor={cursor}
			onCursor={onCursor}
		/>
	)
}
