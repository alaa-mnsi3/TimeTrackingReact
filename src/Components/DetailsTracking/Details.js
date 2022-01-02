import React,{useContext,useEffect,useState} from 'react'
import Data from '../../data.json';
import { ContextBtn } from '../Card/Card';
import './Details.css'

function Details() {
    const {ToggleFl}=useContext(ContextBtn)
    const [Filter,setFilter] = useState(()=>
    {
        let localFilter= localStorage.getItem('Filter')
        return localFilter? JSON.parse(localFilter):[]
    })
    useEffect(() =>
    {        
        localStorage.setItem('Filter',JSON.stringify(Filter))
    })
    useEffect(()=>
    {
        if(ToggleFl==='Daily')
        {
            setFilter(Data.map(res => res.timeframes.daily));
        }
        if(ToggleFl === 'Weekly')
        {
            setFilter(Data.map(res => res.timeframes.weekly));
        }
        if(ToggleFl === 'Monthly')
        {
            setFilter(Data.map(res => res.timeframes.monthly)); 
        }
    },[ToggleFl])
    return (
        <>
            {(Filter.length-1)===0?null:
                <div className='Details'>
                    {Filter.map((item,index) =>
                    (
                        <div  key={index} className='Details-sec-parent'>
                            <div className='Details-sec'>
                                <div className='Details-sec-tiltle'>
                                    <h6>{Data[index].title}</h6>
                                    <div>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='Details-sec-caption'>
                                    <h2 className='Details-sec-num'>{item.current}hrs</h2>
                                    <p>Last Week-{item.previous}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default Details
