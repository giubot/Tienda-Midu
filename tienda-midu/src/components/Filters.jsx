import { useState, useId } from "react";
import { useFilters } from "../hooks/useFilters";
import './Filters.css'


export function Filters() {
    const { setFilters } = useFilters() 
    
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilteredId = useId()
    
    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }
    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category:event.target.value
        }))
    }
        
    
    return (
        <section className='filters'>
           
            <div>
                <label htmlFor={minPriceFilterId}>Precio Mínimo</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilteredId}>Categorías</label>
                <select id={categoryFilteredId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Celulares</option>
          
                </select>
            </div>
        </section>
    )
    
}