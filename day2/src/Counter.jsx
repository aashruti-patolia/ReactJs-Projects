import './App.css'
import { useState } from 'react'
function Counter() {
    let [state, setState] = useState(0)

    function increament() {
        if (state >= 10) {
            setState(10);
        }
        else
            setState(state + 1);
    }
    function decreament() {
        if (state <= 0) {
            setState(0);
        }
        else
            setState(state - 1);


    }
    return (
        <div className='App'>
            <div className='Counter'>
                <h1>Counter Application</h1>
                <div className='ProductImg'>
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTRNomlXs61p_3ezeYGZQ24qdARwpL17fwSQ48Bb2_iYJChYiUaq-sTOSUACLWNmSgwAec-cnQiig5m37C0UsmULOWgHEgvfAufZNME9lla&usqp=CAE" alt="" />
                </div>
                <h2>Apple Vision Pro</h2>
                <p>Rs. 3,99,999/-</p>
                <div className='box'><button onClick={decreament}>-</button></div>

                <div className='number'>
                    {state}
                </div>
                <div className='box'><button onClick={increament}>+</button></div>


            </div>
        </div>
    )
}

export default Counter;