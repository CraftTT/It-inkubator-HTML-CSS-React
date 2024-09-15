import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import Skill from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"html"}/>
                <Skill iconId={"css"}/>
                <Skill iconId={"js"}/>
                <Skill iconId={"react"}/>
                <Skill iconId={"github"}/>
                <Skill iconId={"git"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 100vh;
`


