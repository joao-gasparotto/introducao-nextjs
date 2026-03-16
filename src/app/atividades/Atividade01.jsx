import styles from "./at01.css";
import Link from "next/link";
function atividade01(){
    return(
        <div className={styles.at}>
        <h1>texto q eu coloquei</h1>
            <div className={styles.atdv}>
                    <h1>outro texto</h1>

                    <Link>https://brave.com/pt-br/download/</Link>
            </div>
        </div> 

       

    )
};
