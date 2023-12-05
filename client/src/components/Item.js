import React from 'react'
import styles from './Items.module.css'
import { Link, Navigate } from 'react-router-dom'
import { ITEM_ROUTE, SHOP_ROUTE } from '../utils/consts'

const Item = ({item}) => {
    
    

    return(
        
        <div className={styles.card}>
            <Link to={ITEM_ROUTE + '/' + item.id}  className={styles.links}>
                <img src={'http://localhost:5000/' + item.img} />
                <div>{item.price}</div>
                <div>{item.name}</div>
            </Link>
        </div>
        
    )
}

export default Item