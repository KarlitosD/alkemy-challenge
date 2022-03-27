import React from "react"
import { Menu } from "@headlessui/react"

import useToken from "../hooks/useToken"

function Header() {
	const { deleteToken } = useToken()

	return (
		<header className="border-b flex justify-between items-center border-gray-500 py-3 px-6 md:px-10 ">
			<img src="src/assets/alkemyLogo.2daef856.svg" alt="Alkemy logo" />
			<Menu as="div" className="relative inline-block text-left">
				<Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium border bg-gray-100 text-blue-700 rounded-md hover:(bg-opacity-30 shadow)">
					Opciones
				</Menu.Button>

				<Menu.Items className="absolute right-0 w-36 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div p="1">
						<Menu.Item>
							<button
								className={"hover:(bg-blue-600 text-white) group flex rounded-md items-center w-full px-2 py-2 text-sm"}
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