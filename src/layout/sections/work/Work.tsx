import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>Demo Code</Link>
            <Link href={"#"}>GIT</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    border-radius: 20px;
    width: 373px;
    height: 567px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    background: #363636;
    padding: 31px;
    margin: 20px;
`
const Image = styled.img`
    border-radius: 20px 20px 0 0;
    width: 375px;
    height: 260px;
    object-fit: cover;
`
const Link = styled.a`
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 16px;
    line-height: 162%;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #fff;
    
`
const Title = styled.h3`
    font-weight: 500;
    font-size: 28px;
    line-height: 93%;
    text-align: center;
    color: #ccc;
`

const Text = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 144%;
    color: #ccc;
`