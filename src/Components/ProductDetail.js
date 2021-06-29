import { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import './product.css';

const ProductDetail = () => {
    const {id} = useParams();
    const[data, setData] = useState({});
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(res=>res.json())
        .then(json=>setData(json));
    },[])
    return(
        <>
            <ProHead>Product Details</ProHead>
            <ProDesc>      
                <ProImage>
                    <img 
                        src={data.image} 
                        alt="Product Image" 
                        className="proImage" 
                    />
                </ProImage>
                <ProDetail>
                    <ProTitle>Title: {data.title}</ProTitle>
                    <ProCategory>Cateogry: {data.category}</ProCategory>
                    <ProPrice>Price: ${data.price}</ProPrice>
                    <ProDescription>{data.description}</ProDescription>
                    <Buy>Buy Now</Buy>
                    <Cart>Add to Cart</Cart>
                </ProDetail>
            </ProDesc>
        </>
    );
}
export default ProductDetail;

const ProHead = styled.h1`
    text-align: center;
    margin-top: 20px;
    font-size: 35px;
    letter-spacing: 2px;
    color: #6F6F6F;
`;
const ProDesc = styled.div`
    display: flex;
    justify-content: space-around;
    width:70%;
    margin:auto;
    margin-top: 100px;

    @media screen and (max-width: 1800px){
        width: 85%;
    }
    @media screen and (max-width: 1600px){
        width: 85%;
    }
    @media screen and (max-width: 1400px){
        width: 90%;
    }
    @media screen and (max-width: 1300px){
        width: 98%;
    }
    @media screen and (max-width: 1050px){
        width: 100%;
    }
    @media screen and (max-width: 950px){
        flex-direction: column;
        width: 100%;
        margin-top: 50px;
    }
`;
const ProImage = styled.div`
    margin: auto;

    @media screen and (max-width: 950px){
        display: block
        margin: auto;
    }
`;
const ProDetail = styled.div`
    padding-top: 30px;
    padding-left: 50px;
    @media (max-width:950px){
        padding-right: 50px;
    }
    @media (max-width:550px){
        padding-left: 30px;
        padding-right: 30px;
    }
    @media (max-width:500px){
        width: 100%;
    }
    @media (max-width:500px){
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
    }
`;
const ProTitle = styled.h4`
    letter-spacing: 0.5px;
    color: #353535; 
    font-weight: bold;
`;
const ProCategory = styled.p`
    padding: 10px 0px;
    color: #000;
    font-family: consolas;
    font-weight: bold;
    font-size: 18px;
`;
const ProPrice = styled(ProCategory)``;
const ProDescription = styled(ProCategory)`
    font-weight: 100;
    text-align: justify;
`;
const Buy = styled.button`
    width: 100px;
    height: 35px;
    border: 1px solid rgba(0,0,0,.125);
    background-color: #7AD042;
    font-weight: bold; 
    margin-bottom: 20px;
`;
const Cart = styled(Buy)`
    width: 120px;
    margin-left: 10px;
    background-color: #42C3D0;
`;
