import React from 'react'
import styles from './about.module.css'

const About = () => {

    return(
        <div className={styles.main}>
            <h1>МЫ самые крутые продавцы</h1>
            <h2>продаем все и вся</h2>

            <div className={styles.bike}>
                <h1>прикупи огромный байк</h1>
            </div>
        </div>
    ) 

}

export default About