import React from 'react'
import styles from './about.module.css'

const Contacts = () => {

    return(
        <div className={styles.main}>
            <div className={styles.phones}>
                <a href='tel: +7299-2929'> номер 1: 8 800 888 88 88</a>
                <a href='tel: +73999393999'> номер 2: 8 900 888 88 88</a>
                <a href='tel: +74999494999'> номер 3: 8 100 888 88 88</a>
            </div>
            <div className={styles.mails}>
            <a href='mailto: pochta@mail.ru'> почта 1: poctha@mail.ru</a>
            <a href='mailto: pochta1@mail.ru'> почта 2: poctha1@mail.ru</a>
            <a href='mailto: pochta2@mail.ru'> почта 3: poctha2@mail.ru</a>
            </div>
        </div>
    ) 

}

export default Contacts