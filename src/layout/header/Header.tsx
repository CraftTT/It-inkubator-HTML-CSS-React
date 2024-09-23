import React from 'react';
import styled from "styled-components";
import Logo from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
               <FlexWrapper justify={"space-between"} align={"center"}>
                   <Logo/>
                   <Menu menuItems={items}/>
               </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    width: 100%;
    height: 59px;
    padding: 20px 0;
    top: 0;
    left: 0;
    position: fixed;
    right: 0;
    z-index: 99999;
    
    
`

export default Header