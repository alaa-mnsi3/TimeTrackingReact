import React,{useContext} from 'react'
import { ContextBtn } from '../Card/Card';
import './Toggle.css'

function Toggle() {
    const {Daily,Weekly,Monthly,setToggleFl,setDaily,setWeekly,setMonthly}=useContext(ContextBtn)
    
    function handleClick(e)
    {
        setToggleFl(e.target.value)
        if(e.target.value==='Daily')
        {
            setDaily(true)
            setMonthly(false)
            setWeekly(false)
        }
        if(e.target.value==='Weekly')
        {
            setWeekly(true)
            setDaily(false)
            setMonthly(false)
        }
        if(e.target.value==='Monthly')
        {
            setMonthly(true)
            setWeekly(false)
            setDaily(false)
        }
    }

    return (
        <React.Fragment>
            <div className='Toggle'>
                <button className={Daily?'active':''} value={'Daily'} onClick={(e)=>handleClick(e)}>Daily</button>
                <button className={Weekly?'active':''} value={'Weekly'} onClick={(e)=>handleClick(e)}>Weekly</button>
                <button className={Monthly?'active':''} value={'Monthly'} onClick={(e)=>handleClick(e)}>Monthly</button>
            </div>
        </React.Fragment>
    )
}

export default Toggle
