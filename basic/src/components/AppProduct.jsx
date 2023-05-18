import React, { useState } from 'react'
import Product from './Product'


export default function AppProduct() {
    const [Toggle, setToggle] = useState();
    return (
        <section className='AppProductBox'>
            {Toggle && <Product />}
            <button className='ToggleButton'
                onClick={() => setToggle((prev) => !prev)}>
                open Toggle</button>
        </section>
    )
}
