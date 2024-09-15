import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/Ava.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align="center" justify="space-around">
                    <MainSpan>Hi 👋, My name is Pavan MG
                        I build things for web
                    </MainSpan>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    min-height: 100vh;
   
`

const Photo = styled.img`
    border-radius: 174px;
    width: 249px;
    height: 249px;
    object-fit: cover;
`

const MainSpan = styled.span`
    font-size: 58px;
    line-height: 121%;
    letter-spacing: -0.02em;
    color: #d9d9d9;
   
`
