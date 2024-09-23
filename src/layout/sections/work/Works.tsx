import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./Work";
import socialImg from "../../../assets/images/Rectangle 8.png";
import socialImg2 from "../../../assets/images/Rectangle 16.png";
import socialImg3 from "../../../assets/images/Rectangle 18.png";
import socialImg4 from "../../../assets/images/Rectangle 22.png";
import socialImg5 from "../../../assets/images/Rectangle 23.png";
import socialImg6 from "../../../assets/images/Rectangle 24.png";

const worksItems = ["All", "Landing Page", "React", "SPA",]

export const Works = () => {
    return (
        <StyledWorks>

            <SectionTitle>My Projects</SectionTitle>
            <MenuWrapper><Menu menuItems={worksItems}/></MenuWrapper>
            <FlexWrapper wrap={"wrap"} justify={"center"} align={"center"}>
                <Work title={"Project Tile goes here"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} src={socialImg}/>
                <Work title={"Project Tile goes here"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} src={socialImg2}/>
                <Work title={"Project Tile goes here"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} src={socialImg3}/>
                <Work title={"Project Tile goes here"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} src={socialImg4}/>
                <Work title={"Project Tile goes here"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} src={socialImg5}/>
                <Work title={"Project Tile goes here"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} src={socialImg6}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
   
`

const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
`
