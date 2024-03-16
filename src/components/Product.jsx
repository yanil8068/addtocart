import React, {useEffect , useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useSelector, useDispatch} from "react-redux"
import {add , removeOne} from '../actions/action';

const Product = ()=> {
const cart = useSelector(state => state.updateCart)
const dispatch = useDispatch();
console.log(cart);


    const [data, setData] = useState([]);
console.log(data)
    const getData = async ()=> {
        const response = await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        setData(response)
    }
   const send = (list => {
dispatch(add(list))
   })


    useEffect(()=>{
        getData()
    }, []);

    return (
        <div>
            <div className="ms-5 mt-5 row d-flex gap-5">
{
    data && data.map(list => (
        <Card style={{ width: '15rem' , height: 'fit-content'}}>
        <Card.Img style={{ width: '10rem', height: '10rem' }} variant="top" src={list.image} />
        <ListGroup>
      <ListGroup.Item>{list.title}</ListGroup.Item>
      <ListGroup.Item>Price - ${list.price}</ListGroup.Item>
      <ListGroup.Item>Rating {list.rating.rate}</ListGroup.Item>
   
      <ListGroup.Item><Button variant="primary" onClick={()=>send(list)}>Add to cart</Button></ListGroup.Item>
    </ListGroup>
    
      </Card>
    ))
}
</div>
                 
            </div>
    )
}

export default Product