import React from 'react'
import OptionsCategories from "./OptionsCategories"

function Filters({ type, setType, category, setCategory }) {
	const checkboxChange = ({ target: { value } }) => {
		type[value] = !type[value]
		setType({ ...type })
	}

	return (
		<>
			<p className='font-semibold text-xl mb-2 text-center'>Filtrar por</p>
			<div className='flex flex-col justify-center md:(justify-start) gap-2 md:gap-3'>
					<p className='font-semibold text-lg'>Tipo de operacion</p>
				<div className='flex flex-wrap justify-evenly md:(flex-col justify-start)'>
					<label htmlFor="income" className='flex items-center gap-1'>
						<input type="checkbox" value="income" checked={type["income"]} onChange={checkboxChange} id="income" />
						<span>Ingreso</span>
					</label>
					<label htmlFor="exit" className='flex items-center gap-1'>
						<input type="checkbox" value="exit" checked={type["exit"]} onChange={checkboxChange} id="exit" />
						<span>Egreso</span>
					</label>
				</div>
					<p className="font-semibold text-lg">Categoria</p>
				<div className='flex flex-wrap justify-center md:(flex-col justify-start)'>
					<select className='p-1 w-full rounded' value={category} onChange={e => setCategory(e.target.value)}>
						<option value="">-- Ninguna --</option>
						<OptionsCategories />
					</select>
				</div>
			</div>
		</>
	)
}

export default Filters