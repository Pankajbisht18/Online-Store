import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Shop = () => {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json))
    },[])
    console.log(product)
    return(
        <>
            <ShopHead>Products</ShopHead>   
            <ProSection>
                {product.map((pro) => {
                    return(
                        <ProCard key={pro.id}>
                            <img src={pro.image} style={{width: "100%", height:"350px", borderBottom: '1px solid rgba(0,0,0,.125)'}}/>
                            <br />
                            <ProId>Product ID: {pro.id}</ProId>
                            <ProTitle>{pro.title}</ProTitle>
                            <Link to={"/shop/"+pro.id}>
                                <Button>View Product</Button>
                            </Link>
                        </ProCard>
                    )
                })
            }
            </ProSection>
        </>
    );
}
export default Shop;

const ShopHead = styled.h1`
    text-align: center;
    margin-top: 20px;
    font-size: 35px;
    letter-spacing: 2px;
    color: #6F6F6F;
`;

const ProSection = styled.div`
    width: 60%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media screen and (max-width:1600px){
        width: 70%;
    }
    @media screen and (max-width:1300px){
        width: 80%;
    }
    @media screen and (max-width:1100px){
        width: 90%;
    }
    @media screen and (max-width:999px){
        width: 100%;
    }
    @media screen and (max-width:768px){
        flex-direction: column; 
        width: 80%
    }
    @media screen and (max-width:400px){
        width: 95%; 
    }
`;
const ProCard = styled.div`
    width: 30%;
    margin-top: 40px;
    border: 0.1px solid rgba(0,0,0,.125);
    border-radius: 10px;
    height: 570px;
    
    @media screen and (max-width:768px){
        width:100%; 
    }
    @media screen and (max-width:400px){
        width:100%; 
    }
`;
const ProId = styled.p`
    font-weight: bold;
    font-family: consolas;
    font-size: 18px;
    padding-top: 10px;
    padding-left: 20px;
    letter-spacing: 1px;
    color: #6F6F6F;
    
    @media screen and (max-width:999px){
        padding-bottom: 0px; 
    }
`; 
const ProTitle = styled.p`
    color: #000;
    height: 95px;
    font-size: 15px;
    font-weight: bold;
    padding-left: 20px;

    @media screen and (max-width:999px){
        padding-top: 0px; 
    }
`;
const Button = styled.button`
    color: #6F6F6F;
    margin-left: 20px;
    background: transparent;
    border: 1px solid rgba(0,0,0,0.255);
    width: 120px;
    height: 40px;
    font-weight: bold;

    &:hover{
        background: #ffd417;
        border-color: #ffd417;
        color: #fff;
    }
`;