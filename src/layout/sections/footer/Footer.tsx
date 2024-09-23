import React from 'react';
import styled from "styled-components";
import Logo from "../../../components/logo/Logo";
import {Menu} from "../../../components/menu/Menu";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
    width: 100%;
    height: 59px;
    display: flex;
    justify-content: space-between;
`
