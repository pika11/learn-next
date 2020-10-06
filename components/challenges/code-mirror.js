import { Controlled } from "react-codemirror2"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/mode/javascript/javascript"

export default function CodeMirror({ value, className, onBeforeChange }) {
	return (
		<Controlled
			className={className}
			options={{
				mode: "javascript",
				theme: "material",
				lineNumbers: true,
				lineWrapping: true,
			}}
			value={value}
			onBeforeChange={onBeforeChange}
		/>
	)
}
