import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/Ava.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align="center" justify="space-around">
                    <MainSpan>Hi 👋,<br/>
                        My name is<br/>
                        <MainB>Amir</MainB><br/>
                        I build things for web
                    </MainSpan>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    min-height: 100vh;
    margin: 100px;
   
`

const Photo = styled.img`
    border-radius: 174px;
    width: 249px;
    height: 249px;
    object-fit: cover;
    margin: 15px;
`

const MainSpan = styled.span`
    font-size: 58px;
    line-height: 121%;
    letter-spacing: -0.02em;
    color: #d9d9d9;
   
`

const MainB = styled.b `
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
