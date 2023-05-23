import React, { useState } from 'react';
import '../App.css';

export default function AppPointer() {
    const [XY, setXY] = useState({ X: 0, Y: 0 })
    return (
        <div className='BaseContainer'
            onPointerMove={(e) => {
                setXY({ X: e.clientX, Y: e.clientY })
            }}>
            <div className='Pointer'
                style={{ transform: `translate(${XY.X}px,${XY.Y}px)` }}>
            </div>
        </div >
    )
}
