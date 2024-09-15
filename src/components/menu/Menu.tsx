import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <div>
            <StyledMenu>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Tech Stack</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </StyledMenu>
        </div>
    );
};

const StyledMenu = styled.nav `
    ul {
        display: flex;
        gap: 30px;
    }
`

export default Menu;