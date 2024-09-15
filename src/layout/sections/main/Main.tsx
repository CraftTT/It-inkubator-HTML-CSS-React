import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/Ava.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align="center" justify="space-around">
                <div>
                    <MainSpan>Hi 👋, My name is Pavan MG
                        I build things for web
                    </MainSpan>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    min-height: 100vh;
    background-color: #bd4545;
`

const Photo = styled.img`
    border-radius: 174px;
    width: 249px;
    height: 249px;
    object-fit: cover;
`

const MainSpan = styled.span`

`

export default Main;