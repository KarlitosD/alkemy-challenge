import React from "react"
import clsx from "../../utils/clsx"

function Button({ children, className, isDark, ...props }) {
	return (
		<button className={clsx("py-2 px-3 rounded-xl", isDark ? "text-white" : "text-dark-700", className)} {...props}>{children}</button>
	)
}

export default Button