import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
    const { filters } = useFilters()
    return (

        <footer className='footer'>
            <h4>Debugger for development Mode </h4>{
                JSON.stringify(filters, null, 2)
            }
            {/* <h4>Prueba técnica, DevMode</h4> */}
        </footer>
    )
}
