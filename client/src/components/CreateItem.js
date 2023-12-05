import React, { useContext, useEffect, useState } from 'react';
import './CreateItem.module.css';
import { Context } from '..';
import { createItem, fetchItems } from '../http/itemAPI';
import { observer } from 'mobx-react-lite';

const CreateItem = observer(() => {

    const {item} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchItems().then(data => item.setItems(data))
    },[])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }


    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    const addItem = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('info', JSON.stringify(info))
        createItem(formData).then(data => setModal(false))
    }

    return (
        <div className="App">
        <button onClick={openModal}>Добавить товар</button>
        {modal && (
            <div className="modal">
            <div className="modalContent">
                <input placeholder='название' type='' value={name} onChange={e => setName(e.target.value)}/>
                <input placeholder='цена' type='number' value={price} onChange={e => setPrice(Number(e.target.value))}/>
                <input placeholder='картинка' type='file' onClick={selectFile}/>
                <button onClick={addInfo}>добавить свойство</button>
                    {info.map(i => 
                        <div key={i.number}>
                            <input placeholder='названик хар-ки' value={i.title} onChange={(e) => changeInfo('title', e.target.value, i.number)}/>
                            <input placeholder='описание хар-ки' value={i.description} onChange={(e) => changeInfo('description', e.target.value, i.number)}/>
                            <button onClick={() => removeInfo(i.number)}>Удалить</button>
                        </div>
                    )}
                <button onClick={closeModal}>Закрыть</button>
                <button onClick={addItem}>Добавить</button>
            </div>
            </div>
        )}
        </div>
    );
})

export default CreateItem;