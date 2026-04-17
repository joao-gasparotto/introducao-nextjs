'use client'

import { useState } from "react";
import styles from "./page.module.css"

export default function Atividade02() {  

    const [Som, setSom] = useState(0);
    const [Sub, setSub] = useState(0);

    function handleSom () {
        setSom(Som + 1);
    }

    function handleSub () {
        setSub(Sub - 1);
    }

    const total = Som + Sub;

    return (
        <div className={styles.container}>
            <label>{`Contador de cliques: ${total}`}</label>    
            <button onClick={() => handleSom()} className={styles.button1}>+1</button>
           <div className={styles.btb}> <button onClick={() => handleSub()} className={styles.button2}>-1</button>
           </div>
        </div>
    );
}