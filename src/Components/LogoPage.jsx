import React from 'react';
// import logoText from '.././images/logoText.png';
// import logoPlate from '.././images/logoPlate.png';
import logo from '.././images/mainLogo.png';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function LogoPage() {
    return (
        <Link to="/products">
            <LogoContainer>
                <img src={logo} alt="" className="img-fluid"/>
                {/* <img src={logoPlate} alt="" className="img-fluid logo-plate"/>
                <img src={logoText} alt="" className="img-fluid logo-text mt-5"/> */}
            </LogoContainer>
        </Link>
    )
}

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: white;
    // .logo-plate{
    //     height: 25vmin;
    //     pointer-events: none;
    // }
    // .logo-text{
    //     height: 7vmin;
    //     pointer-events: none;
    // }
    // @media (prefers-reduced-motion: no-preference) {
    //     .logo-plate {
    //         animation: App-logo-spin infinite 40s linear !important;
    //     }
    // }      
    // @keyframes App-logo-spin {
    //     from {
    //         transform: rotate(0deg);
    //     }
    //     to {
    //         transform: rotate(360deg);
    //     }
    // }
    
      
`

export default LogoPage
