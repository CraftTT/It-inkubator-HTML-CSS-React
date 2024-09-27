import React from 'react';
import styled from "styled-components";
import Theme from "../../../styles/Theme";




export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>

    );
};

const StyledHeaderMenu = styled.nav `
    ul {
        display: flex;
        gap: 40px; 
         }
    @media ${Theme.media.tablet} {
        display: none
    }
`



const Link = styled.a`
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
    text-align: center;
    color: transparent;
`
const Mask = styled.span `
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    //outline: 1px solid red
    color: ${Theme.colors.SectionTitleTextColor};
    
    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
    }
    }
`
const ListItem = styled.li `
    position: relative;
    
    &::before {
        content: '';
        display: inline-block;
        height: 2px;
        background-color: ${Theme.colors.TextColor};
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scaleX(0);
    }
    
    &:hover {
        &::before {
            transform: scaleX(1);
        }
        ${Mask} {
        transform: skew(12deg) translateX(5px);
        color: white;    
        & + ${Mask} {
            transform: skew(12deg) translateX(-5px)
        }
             }
      
    }
`