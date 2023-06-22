import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }

  .form-background-container {
      background-image: url("../../images/farmers-market-produce.jpeg");
      background-size: cover;
      background-position: center;
  }

  .toggle-button {
    border: none;
    background-color: transparent;
    color: #333;
    font-size: 18px;
    cursor: pointer;
    transition: transform 0.3s;
  }
  
  .toggle-button.hidden::after {
    content: '+';
  }
  
  .toggle-button.visible::after {
    content: '-';
  }
  
  .toggle-button:hover {
    transform: scale(1.1);
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
}
`

export default GlobalStyles
