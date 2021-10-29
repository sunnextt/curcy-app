import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const Globalstyles = createGlobalStyle`
${normalize()}

*,
*::after,
*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    @media only screen and (min-width: 900px) {
        font-size: 75%;
    }
    @media only screen and (min-width: 1200px) {
        font-size: 87.5%;
    }    
}


body {
    transition: all 0.05s linear;
    width: 100%;
    height: 100vh;
    line-height: 2.1rem;
    font-size: ${props => props.theme.typeScale.bodyText4};
    font-family: ${props => props.theme.primaryFont};
    color: ${props => props.theme.colors.black[100]};
    font-style: normal;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.ant-layout{    
    background-color: ${({ theme }) => theme.colors.white[100]};
}

.theContent{
    margin-top: 4.5rem;
}
  
h1 {
    line-height: 4rem;
    font-size: ${props => props.theme.typeScale.header1};
}
h2 {
    line-height: 2.8rem;
    font-size: ${props => props.theme.typeScale.header2};
}
h3 {font-size: ${props => props.theme.typeScale.header3};}
h4 {font-size: ${props => props.theme.typeScale.header4};}
h5 {font-size: ${props => props.theme.typeScale.header5};}  
`;

export default Globalstyles;
