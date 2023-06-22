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

.checkbox-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 3 options per row */
  grid-gap: 10px; /* Spacing between columns and rows */
  list-style-type: none;
  padding: 0;
}

.checkbox-list li {
  display: flex;
  align-items: center;
}

.checkbox-list input[type='checkbox'] {
  margin-right: 5px;
  /* Additional checkbox styles if needed */
}

.checkbox-list label {
  font-size: 12px; /* Smaller font size */
  color: #333;
  display: flex;
  align-items: center;
}

`

export default GlobalStyles
