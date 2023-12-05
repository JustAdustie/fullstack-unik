import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import Item from './Item'
import styles from './Items.module.css'


const ItemList = observer(() => {
    
    const {item} = useContext(Context)
    
    return(
        <div className={styles.main}>
            {item.items.map(item => 
                <Item key={item.id} item={item}/>   
            )}
        </div>
    )
})

export default ItemList