import { useCart } from '../hooks/UseCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
    const { filters } = useFilters()
    const { cart } = useCart()
    
    return (

        <footer className='footer'>
            <h4>Debugger for development Mode </h4>{
                JSON.stringify(filters, null, 2)
            }
            {
                JSON.stringify(cart, null, 2)
            }
        </footer>
    )
}
