import React from 'react'
import styled from "styled-components"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
const Header=()=>{
    return (   
        <Container>
            <HeaderLogo>
            <img src={"https://i.imgur.com/7I9Was5.png"} alt={"dc"} />
            </HeaderLogo>
                <HeaderAdressOption> 
                    <OptionLineOne>Hello</OptionLineOne>
                    <OptionLineTwo>Select your address</OptionLineTwo>
                </HeaderAdressOption>

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
`

const HeaderLogo=styled.div`
    img{ 
        width:100px;
        margin-left:11px;
    }
 `
const HeaderAdressOption=styled.div`

`
const OptionLineOne=styled.div`

`
const OptionLineTwo=styled.div`

`
const HeaderSearch=styled.div`
display:flex;
`
const HeaderSearchInput=styled.input`

`
const HeaderSearchIconContainer=styled.div`

`