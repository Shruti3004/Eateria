import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/eateriaLogo.png';
import myCart from '../images/myCart.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button'

function Navbar() {
    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to='/products'>
                <img src={logo} alt="logo" className="navbar-brand"/>
            </Link>            
            <Link to="/cart" className="ml-auto font-weight-bold">
                <ButtonContainer cartBtn>                    
                    <img src={myCart} alt="My Cart" className="img-fluid"/>
                </ButtonContainer>
            </Link>
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
    background: var(--mainWhite);    
`

export default Navbar
