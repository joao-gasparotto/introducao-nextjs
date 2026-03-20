'use client'

import { useState } from "react";
import styles from "./page.module.css"

export default function Exemplo03() {  

    const [num, setNum] = useState(100);

    function handleIncrementa () {
        setNum(num + 1);
    }

    return (
        <>

        <div className ={styles.all}>

             <div className ={styles.container}>
                     <label>{`Contador: ${num}`}</label>
                
                <div className ={styles.botao}>  
                        <label onClick={() => handleIncrementa()}>+1</label>
                        
                </div>
             </div>   
        </div>
        </> 
    );
}