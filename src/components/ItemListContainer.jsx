import { Container, Row, Col } from 'react-bootstrap';
import { getProducts } from '../mock/AsyncService';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from "react-router-dom"
import Input from './Input';


const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([]);
    const {categoryId} = useParams ()
    console.log(categoryId);
    useEffect(() => {
        getProducts()
            .then((respuesta) => {
              if(categoryId){
                setData(respuesta.filter((prod)=> prod.category === categoryId))
              }else{
                setData(respuesta)
              }
            })
            .catch((error) => console.error(error));
    }, [categoryId]);

    console.log(data);
    return (
        <Container className="mt-5 pt-5">
            <Row className="justify-content-center">
                <Col md="auto">
                    <h2>{greeting}{categoryId && <span>{categoryId}</span>}</h2> 
                   {/* <Input/> */}
                   <ItemList data={data}/>
                </Col>
            </Row>
        </Container>
    );
};

export default ItemListContainer;