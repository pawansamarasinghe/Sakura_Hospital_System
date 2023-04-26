import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <span style={{color: "#fff" , top: "0.8rem", left: "40rem", position: "relative", textAlign:"center"}}>
                &copy;{new Date().getFullYear() } All Rights Reserved. 
            </span>
        </FooterContainer>
    )
}

export default Footer

//footer
const FooterContainer = styled.footer`

    background: #344;
    height: 3rem;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
`;