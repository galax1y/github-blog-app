import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  font-family: 'Nunito', sans-serif;
  line-height: 1.6;

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
  }

  h1 {
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
    font-size: ${(props) => props.theme.size['xxl']};
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: ${(props) => props.theme.size['md']};
    color: ${(props) => props.theme['base-text']};
  }

  span {
    color: ${(props) => props.theme['base-span']}
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['blue']}
  }
}

`
