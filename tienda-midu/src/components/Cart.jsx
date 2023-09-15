import './Cart.css'

import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon, } from './Icons.jsx'


export function Cart() {
    const cartCheckboxId = useId()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>

                    <img src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt="Iphone X" />
                    <div>
                        <strong>iPhone </strong>-$899
                    </div>

                    <footer>
                        <small>
                            Cantidad: 1
                        </small>
                        <button><RemoveFromCartIcon /></button>
                    </footer>

                </ul>
                <button>
                    <ClearCartIcon />
                </button>

            </aside>


        </>

    )

}