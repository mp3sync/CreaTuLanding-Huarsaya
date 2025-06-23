import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from "react-router-dom"
import Input from './Input';
import LoaderComponent from './LoaderComponent';
import { collection, getDocs, query, where, } from 'firebase/firestore';
import { db } from '../service/firebase';

const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([]);
    const {categoryId} = useParams ()
    const [loading, setLoading] = useState(false)

      useEffect (()=>{
           setLoading(true)
           const productsCollection = categoryId ? query (collection(db, "productos"), where("category", "==", categoryId )) :collection (db,"productos")
           getDocs (productsCollection)
           .then((res)=> {
             const list = res.docs.map ((doc) => {
                return {
                      ...doc.data(),
                      id:doc.id
                }


             })
             setData(list)

           })
           .catch((error)=> console.log(error))
           .finally(()=>setLoading(false))
      },[categoryId])



    return (
       <>
       {
          loading
          ? <LoaderComponent/> :
           <Container className="mt-5 pt-5">
            <Row className="justify-content-center">
                <Col md="auto">
                
                    <h2>{greeting}{categoryId && <span>{categoryId}</span>}</h2> 
                   {/* <Input/> */}
                   <ItemList data={data}/>
                </Col>
            </Row>
           </Container>

       }
             </>
    );
};

export default ItemListContainer;