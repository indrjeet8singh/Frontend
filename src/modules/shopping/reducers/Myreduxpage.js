import React, { Fragment } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,mycustomfucntion } from './Myactions';


function Myreduxpage() {

const dispatch = useDispatch();
const count = useSelector((state)=> state.counter.value);
    return (
        <Fragment>
            <div className='mt-5'>
            <div>
                <div className='shadow bg-success' style={{height:'200px',width:'300px', margin:'40px', paddingTop:'30px'}}>
                    <button onClick={() => dispatch(increment())}> Increment</button>
                    <span>{count}</span>
                    <button onClick={() => dispatch(decrement())}> Decrement</button>
                    <button onClick={() => dispatch(mycustomfucntion())}> Decrement</button>
                </div>
                
            </div>
            </div>
        </Fragment>


    )
}

export default Myreduxpage