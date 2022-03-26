import React from 'react'
import { CATEGORIES } from "../utils/categories"

function OptionsCategories() {
  return (
		<>
			{CATEGORIES.map(CATEGORY => (
				<option value={CATEGORY} key={CATEGORY}>{CATEGORY}</option>
			))}
		</>
  )
}

export default OptionsCategories