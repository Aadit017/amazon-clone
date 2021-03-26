import React from 'react'
import styled from "styled-components"
import Product from "./product.component"
const Home =()=>{
    return (
        <Container>
            <Banner>

            </Banner>        
            <Content>
                 <Product />
                 <Product />
            </Content>
        </Container>
    )
}
export default Home;
const Container =styled.div`

`
const Banner=styled.div`
    background-image:url("https://i.imgur.com/SYHeuYM.jpg");
    min-height: 600px;
    background-position:center;
    background-size:cover;  
    mask-image:linear-gradient(to bottom ,rgba(0,0,0,1) , rgba(0,0,0,0));
    z-index:1;
`
// with mask image the black part over here became transparent 
const Content=styled.div`
    background:white;
    padding: 0 10px;
    margin-top: -350px;
    z-index:100;
    display:flex;
`


