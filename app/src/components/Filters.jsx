import React from 'react'
import OptionsCategories from "./OptionsCategories"

function Filters({ type, setType, category, setCategory }) {
	const checkboxChange = ({ target: { value } }) => {
		type[value] = !type[value]
		setType({ ...type })
	}

  return (
	 <div className='p-4 bg-white rounded flex flex-col gap-2'>
		<label htmlFor="income" className='flex items-center gap-1'>
			<input type="checkbox" value="income" checked={type["income"]} onChange={checkboxChange} id="income"/>
			<span>Ingreso</span>
		</label>
		<label htmlFor="exit" className='flex items-center gap-1'>
			<input type="checkbox" value="exit" checked={type["exit"]} onChange={checkboxChange} id="exit" />
			<span>Egreso</span>
		</label>
		 <select className='p-1 w-full rounded' value={category} onChange={e => setCategory(e.target.value)}>
			 <option value="">-- Ninguna --</option>
			 <OptionsCategories />
		 </select>
	 </div>
  )
}

export default Filters