import React from "react"
import { Menu } from "@headlessui/react"

import useToken from "../hooks/useToken"


function Header() {
	const { deleteToken } = useToken()

	return (
		<header className="border-b flex border-gray-500 p-2 justify-end">
			<Menu as="div" className="relative inline-block text-left">
				<Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-red-600 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
					Options
				</Menu.Button>

				<Menu.Items className="absolute right-0 w-36 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="px-1 py-1 ">
						<Menu.Item>
							<button
								className={"hover:(bg-violet-500 text-white) text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"}
							>
								Edit
							</button>
						</Menu.Item>
						<Menu.Item>
							<button
								className={"hover:(bg-violet-700 text-white) group flex rounded-md items-center w-full px-2 py-2 text-sm"}
								onClick={deleteToken}
							>
								Cerrar sesion
							</button>
						</Menu.Item>
					</div>

				</Menu.Items>
			</Menu>
		</header>
	)
}

export default Header