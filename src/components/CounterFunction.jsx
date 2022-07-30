import React, { useState } from 'react'

const CounterFunctional = () => {
    const [counter, setCounter] = useState(0);
    const printDisabledDecrement = () => {
        return (
            <button className={'counter-button-disabled'}>
                -
            </button>
        )
    }
    const printEnabledDecrement = () => {
        return (
            <button className={'counter-button'} onClick={() => setCounter(counter-1)}>
                -
            </button>
        )
    }
    
    return ( 
        <>
            {counter === 0 && printDisabledDecrement()}
            { counter !== 0 && printEnabledDecrement() }
                    <span className='counter'>
                        {counter}
                    </span>
            <button className='counter-button'onClick={() =>setCounter(counter +1)}>
                +
            </button> 
            
            
            
            
            

            <p>
                {
                    counter === 0 && 
                        <div>
                            <b>Hello its Zero . </b>
                        </div>
                    
                }
            </p>

        </>
     );
}
 
export default CounterFunctional;