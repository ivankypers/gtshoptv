import React from "react";
import styles from './Partners.module.scss'
import Image from "next/image";

const Partners: React.FC = () =>{

   return (
       <section className={styles.partners}>
           <div className="container">
                <h2 className={styles.title}>Наши партнёры по монетизации</h2>
                <div className={styles.list}>
                    <Image src='/ClickWave.png' alt="clickwave" width="177" height="55"/>
                    <Image src='/zyphronix.png' alt="zyphronix" width="101" height="70"/>
                    <Image src='/novasphere 1.png' alt="novasphere" width="175" height="45"/>
                </div>
           </div>
       </section>
   )
}

export default Partners