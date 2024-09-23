import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/work/Works";
import styled from "styled-components";
import {Footer} from "./layout/sections/footer/Footer";


function App() {
    return (
        <StyledMainApp className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
            <Footer />
        </StyledMainApp>
    );
}

const StyledMainApp = styled.div `
    padding: 50px 100px;
    
`



export default App;

