import React from 'react'
import styled from "styled-components"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from "react-router-dom"
const Header=()=>{
    return (   
        <Container>
            <HeaderLogo>
            <img src={"https://i.imgur.com/7I9Was5.png"} alt={"dc"} />
            </HeaderLogo>
            
                <HeaderAddressOption> 
                <LocationOnIcon />
                <HeaderOption>
                    <OptionLineOne>Hello</OptionLineOne>
                    <OptionLineTwo>Select your address</OptionLineTwo>
                </HeaderOption>
                </HeaderAddressOption>

                <HeaderSearch>
                    <HeaderSearchInput type="text" />
                    <HeaderSearchIconContainer>
                        <SearchIcon />
                    </HeaderSearchIconContainer>
                </HeaderSearch>

                <HeaderNavItems>
                    <HeaderOption>
                    <OptionLineOne>Hello,Aadit</OptionLineOne>
                    <OptionLineTwo>Accounts & Lists</OptionLineTwo>
                    </HeaderOption>
                    <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                    </HeaderOption>

                    <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingBasketIcon />
                        <CartCount>5</CartCount> 
                    </Link>
                    </HeaderOptionCart>
                
                </HeaderNavItems>
            </Container>
        )
}

export default Header;
const Container=styled.div`
    height:60px;
    background-color:#0F1111;
    display:flex;
    align-items:center;
    color:white;
    justify-content:space-between;
`

const HeaderLogo=styled.div`
    img{ 
        width:100px;
        margin-left:11px;
    }
 `
const HeaderAddressOption=styled.div`
padding:0 5px;
display:flex;
align-items:center;
`
const OptionLineOne=styled.div`

`
const OptionLineTwo=styled.div`
    font-weight:700;
`
const HeaderSearch=styled.div`
display:flex;
flex-grow:1;
height:40px;
border-radius:4px;
overflow:hidden;
margin-left:4px;
background-color:white;
:focus-within{
    box-shadow: 0 0 0 3px #F90
}
`
const HeaderSearchInput=styled.input`
flex-grow:1;
border:0;
:focus{
    border:none;
}
`
const HeaderSearchIconContainer=styled.div`
background-color:#febd69;
width:45px;
color:black;
display:flex;
justify-content:center;
align-items:center;
`
// just- for aliging from the top 
// align for centering from the vertical position 
const HeaderNavItems=styled.div`
display:flex;
`
const HeaderOption=styled.div`
    padding: 10px 9px;
`
const HeaderOptionCart=styled.div`
    a {
        display:flex;
        align-items:center;
        padding
    }
`
const CartCount=styled.div`

`
