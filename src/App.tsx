import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/work/Works";
import styled from "styled-components";


function App() {
    return (
        <StyledMainApp className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
        </StyledMainApp>
    );
}

const StyledMainApp = styled.div `
    background-color: #191919;
`

export default App;

