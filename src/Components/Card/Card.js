import React,{useState,useEffect} from 'react'
import Toggle from '../ToggleTracking/Toggle'
import HeaderCard from './HeaderCard'
import Details from '../DetailsTracking/Details';
import './Card.css';

export const ContextBtn=React.createContext({});
function Card() {
    const [Daily,setDaily] = useState(()=>{return localStorage.getItem('Daily')===undefined?false:localStorage.getItem('Daily')==='false'?false:true})
    const [Weekly,setWeekly] = useState(()=>{return localStorage.getItem('Weekly')===undefined?false:localStorage.getItem('Weekly')==='false'?false:true})
    const [Monthly,setMonthly] = useState(()=>{return localStorage.getItem('Monthly')===undefined?false:localStorage.getItem('Monthly')==='false'?false:true}) 
    const [ToggleFl,setToggleFl]=useState('')

    useEffect(()=>{
        localStorage.setItem('Daily',Daily)
        localStorage.setItem('Weekly',Weekly)
        localStorage.setItem('Monthly',Monthly)
    },[Daily,Monthly,Weekly,ToggleFl])
    // useEffect(()=>
    // {
    //     setDaily(true)
    //     setMonthly(false)
    //     setWeekly(false)
    //     setToggleFl('Daily')
    // },[])
    return (
        <ContextBtn.Provider value={({
        'Daily':Daily,
        'Weekly':Weekly,
        'Monthly':Monthly,
        'ToggleFl':ToggleFl,
        'setDaily':setDaily,
        'setWeekly':setWeekly,
        'setMonthly':setMonthly,
        'setToggleFl':setToggleFl})}>
            <section className='Card'>
                <HeaderCard/>
                <Toggle/>
            </section>
            <section className='Details-parent'>
                <Details/>
            </section>
        </ContextBtn.Provider>
    )
}

export default Card
