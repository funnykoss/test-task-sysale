/* eslint-disable react-hooks/exhaustive-deps */
import React,  { useState } from "react"
import ColorList from "../ColorList/ColorList";
import s from './ColorAdvancer.module.css'
import { IoIosArrowDown } from 'react-icons/io';



const ColorAdvancer = () => {
    const [visible, setVisible] = useState(false);
    
    const toggleList = event => {
        
    event.preventDefault();
    setVisible(visible => !visible);
    };
   

    function handleClick() {
        setVisible(false)
    }

    return (
        <>
            <div className={s.colorAdvancer}  onClick={toggleList} >
                <p className={s.title}>Цвет</p>
                {visible
                    ? <IoIosArrowDown className={s.activeAdvancerIcon}/> 
                    : <IoIosArrowDown className={s.advancerIcon}/>}

                {visible && <ColorList onClose={handleClick}/>}

               
            </div>
            
           
        </>
    )
}

export default ColorAdvancer