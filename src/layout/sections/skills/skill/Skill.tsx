import React from 'react';
import Icon from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string

}

const Skill = (props: SkillPropsType) => {
    // @ts-ignore
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
        </StyledSkill>
    );
};
const StyledSkill = styled.div`
    width: 33%;
    background-color: #ff6a6a;
    margin: 20px;
   
`

export default Skill;