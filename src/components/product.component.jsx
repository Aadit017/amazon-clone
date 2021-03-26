import React from 'react'
import styled from "styled-components"
function Product() {
    return (
        <Container>
        <Title>
            Ipad pro 
        </Title>
        <Price>
            $1503
           </Price>
    <Rating>
        ***** 
    </Rating>
        
       <ActionSection>
       <Image src={"https://www.pngitem.com/pimgs/m/46-462027_ipad-3-png-ipad-pro-12-9-transparent-png.png"} />
        <AddToCartButton>
            Add to cart
        </AddToCartButton>
       </ActionSection>
        </Container>
    )
}

export default Product
const Container=styled.div`
    background-color:#fff;
    z-index:100;
    width:200px;
    height:350px;
    flex:1;
    padding:20px;
    margin:10px;
    max-height:400px;
    display:flex;
    flex-direction:column;
    text-align:center
`
const Title=styled.span`

`
const Price=styled.span`
    font-weight:500;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top:3px;
`
const Rating=styled.p`
`
const Image=styled.img`
width:200px;
height:200px;
max-height:200px;

`
// object fit contain is pretty important 
const AddToCartButton=styled.button`
width:100px;
height:30px;
background-color:yellow;
border:2px solid pink;
border-radius:2px;
`
const ActionSection=styled.div`
margin-top:12px;
display:grid;
place-items:center;

`