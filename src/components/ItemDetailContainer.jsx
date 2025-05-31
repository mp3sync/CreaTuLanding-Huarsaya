import React, { useState, useEffect } from 'react';
import { getOneProduct } from '../mock/AsyncService'; 
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState(null);
    const { itemId } = useParams();

    useEffect(() => { 
        console.log("ItemId recibido:", itemId);
        getOneProduct(itemId)
            .then((response) => {
                if (!response) {
                    console.log("Producto no encontrado");
                } else {
                    console.log("Producto encontrado:", response);
                    setDetalle(response);
                }
            })
            .catch((error) => console.log("Error:", error));
    }, [itemId]);

    return (
        <div>
            {detalle ? <ItemDetail detalle={detalle} /> : <p>Cargando producto...</p>}
        </div>
    );
};

export default ItemDetailContainer;
