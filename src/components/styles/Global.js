import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

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
      background-position: fixed;
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

{==============================================SIGN UP FORM==============================================}

.checkbox-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-gap: 10px; 
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

{==============================================HOMEPAGE NAVBAR==============================================}


.navbar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.nav};
}

.navbar li {
  padding: 2% 5%;
  background-color: ${({ theme }) => theme.colors.nav};
}

.navbar button {
  border: none;
  background-color: ${({ theme }) => theme.colors.nav};
}

.navbar li a {
  display: block;
  text-align: center;
  background-color: hsl(192, 100%, 9%);
  text-decoration: none;
  transition: color 0.3s; /* Add transition effect for smooth color change */
}

.navbar li a:hover {
  text-shadow: #F2EAD3;
}

.navbar button:hover {
  color: #0A6EBD;
}

{==============================================USER  NAVBAR============================================}
.user-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f1f1f1;
}

.left-section {
  display: flex;
  align-items: center;
}

.left-section img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.search-box {
  flex: 1;
  margin: 0 10px;
}

.search-box input {
  width: 100%;
  padding: 5px;
  font-size: 16px;
}

.right-section button {
  margin-left: 5px;
  padding: 8px 16px;
  font-size: 16px;
}

{============================================USER PROFILE=========================================}


.user-profile {
  display: flex;
}

.profile-picture img {
  width: 30px;
  height: 40px;
  margin-right: 20px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-text: left;
}

.trade-message-contacts-looking-for {
  text-align: center;
  border: solid;
  width: 75%
}

.items-for-trade,
.items-looking-for-trade {
  margin-top: 20px;
}

.user-profile ul {
  list-style: none;
  padding: 0;
}

.user-profile ul li {
  margin-bottom: 10px;
}

.picture-and-contact-info {
  flex-display: left;
  width: 25%;
  border: solid;
}

.trade-bar-nav {
  border-bottom: solid;
  border-width: 100%;
  padding: 10px 90px 10px 90px;
  display: flex;
  justify-content: space-between;
}

.trade-bar-nav button {
  border: none;
  background-color: black; 
}

.trade-bar-nav button:hover {
  color: ${({ theme }) => theme.colors.nav};
}

.message-box {
  width: 70%;
  height: 20%;
  margin-bottom: 10%;
}

.messages li {
  border: solid;
}

`

export default GlobalStyles
