import React from 'react';
import styled, {css} from "styled-components";
import Theme from "../../../styles/Theme";




export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={true}>
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
            </MobileMenuPopup>
        </StyledMobileMenu>

    );
};

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${Theme.media.tablet} {
        display: block;
    }
`
const MobileMenuPopup = styled.div<{isOpen: boolean}> `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: ${Theme.colors.primaryBg};
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    ul {
        display: flex;
        gap: 40px;
        flex-direction: column;
        align-items: center;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.LineColor};
        position: absolute;
        left: 40px;
        bottom: 50px;

            ${props => props.isOpen && css<{isOpen: boolean}>`
                background-color: rgba(255, 255, 255, 0);

            `}
    
    &::before { 
        content: "";
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.TextColor};
        position: absolute;
        transform: translateY(-10px);
        
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
    
`}
    }
        
&::after {
    content: "";
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${Theme.colors.TextColor};
    position: absolute;
    transform: translateY(10px);
    
         ${props => props.isOpen && css<{isOpen: boolean}>`
             transform: rotate(45deg) translateY(0);
             width: 36px;
    
`}
    
}`





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