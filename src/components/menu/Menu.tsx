import React from 'react';
import styled from "styled-components";



export const Menu = (props: {menuItems: Array<string>}) => {
    return (
            <StyledMenu>
                <ul>

                    {props.menuItems.map((item, index) => {
                        return <li key={index}>
                            <a href="">{item}</a>
                        </li>
                    })}
                </ul>
            </StyledMenu>

    );
};

const StyledMenu = styled.nav `
    ul {
        display: flex;
        gap: 30px;
   
         }
    a {
        font-weight: 500;
        font-size: 20px;
        line-height: 130%;
        text-align: center;
        color: #a7a7a7;
       
        
    }
  
`

