import styled, { createGlobalStyle } from 'styled-components'
import { Button, Typography } from 'antd'
import antd from 'antd/dist/antd.css'

const { Title } = Typography

export const GlobalStyle = createGlobalStyle`
    ${antd}

    body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-stretch: normal;
    font-size: 14px;
    line-height: 1.8;
    letter-spacing: 0.5px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    
    }
    //    font-family: Menlo, Consolas, monospace;
    //    color: #444;
    //}
    //
    //li {
    //  list-style-type: none;
    //}
    //
    //ul ul ul {
    //  border-left: 1px solid black;
    //}
    
    div {  box-shadow: 0 0 25px rgba(0, 0, 0, 0.0424);

}

     li {
    list-style: none;
}


    //#current {
    //  text-shadow: none;
    //  background-color: #282c34;
    //  color: #282c34;
    //  border: none;
    //}
    //
    //#current + .drag-n-drop {
    //  display: none;
    //}
`

export const StyledAppWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`


export const ButtonStyled = styled.button`
  font-family: Menlo, Consolas, monospace;
  background: none;
  color: #42526e;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  cursor: pointer;
  &:hover {
    background-color: #d6d7d9;
  }
  &:active {
    background-color: #d6d7d9;
`


