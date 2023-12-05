import React, { useEffect, useState } from "react";
import styles from './itemPage.module.css'
import { useParams } from "react-router-dom";
import { fetchOneItem } from "../http/itemAPI";

const ItemPage = () => {

    const [item, setItem] = useState({info: []})
    
    const {id} = useParams()

    useEffect(() => {
        fetchOneItem(id).then(data => setItem(data))
    }, [])

    return(
        <div className={styles.main}>
            <div className={styles.img}>
                <img src={'http://localhost:5000/' + item.img}/>
            </div>
            <div className={styles.card}>
                <h1>{item.name}</h1>
                <h2>{item.price}</h2>
                {item.info.map(info => 
                    <p key={info.id}>
                        {info.title} : {info.description}
                    </p>    
                )}
            </div>
        </div>
    )
}
export default ItemPage