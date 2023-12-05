import React, { useContext, useEffect } from "react";
import ItemList from "../components/ItemList";
import { Context } from "..";
import { fetchItems } from "../http/itemAPI";

const Shop = () => {

    const {item} = useContext(Context)

    useEffect(() => {
        fetchItems().then(data => item.setItems(data))
    }, [])

    return(
        <div>
            <ItemList/>
        </div>
    )
}
export default Shop