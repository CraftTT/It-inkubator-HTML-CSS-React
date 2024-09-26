import React from 'react';
import styled from "styled-components";
import Icon from "./Icon";

export const IconMenu = () => {
    return (
        <StyledIconMenu>
            <Icon iconId={'git-mini'} />
            <Icon iconId={'linkedin'} />
        </StyledIconMenu>
    );
};

const StyledIconMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
   
`