import React from 'react';
import { render, screen, fireEvent, getByTestId, getByText, within } from '@testing-library/react';
import { Browser } from 'bonjour-service';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';
import Header from '../../components/HomePage';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import { Container } from '../../components/styles/Container.styled';
import '@testing-library/jest-dom/extend-expect';
import {card_content, produce_content} from '../../content';
import GlobalStyles from '../../components/styles/Global';
import { ThemeProvider } from 'styled-components'
import { HomePage } from '../../components/styles/HomePage.styled';


//Header Tests Makes sure the welcome message and image render correctly

const theme = {
  colors: {
    nav: '#658864', 
    text: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

const card_1_title = card_content[0].title
const card_1_text = card_content[0].body
const card_2_title = card_content[1].title
const card_2_text = card_content[1].body
const home_page_welcome_message = "Food is one of the oldest bridges humanity has to connect with their community. From birthdays to weddings and funerals, food has always been an absolute staple for gatherings of all kinds. The intention of this project is to bring communities back together doing one of the oldest practices known to mankind, growing food. It is our hope that you will find this resource helpful in connecting back to your roots and sharing that with your community."

beforeEach(() => {
  render(
    <ThemeProvider theme={theme}>
    <BrowserRouter> 
      <App/>
    </BrowserRouter>
    </ThemeProvider>
)})


describe("HomePage Test for main Paragraph, welcome message and image, cards and header and footer tests", () => {
  test('[1] Image renders correctly on homepage', () => {

    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <HomePage />
          <Container data-testid="container">
            {card_content.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </Container>
          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    );

    const homePageImage = screen.getByTestId("homePage-image");
    expect(homePageImage).toBeInTheDocument();

  });


  test('[2] homepage welcome message and title text renders correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <HomePage />
          <Container data-testid="container">
            {card_content.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </Container>
          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByTestId('Home-page-header')).toHaveTextContent("Build Your Community");
    expect(screen.getByTestId('homepage-welcome-message')).toHaveTextContent(home_page_welcome_message);
  });

  
  test('[3] Card title/body text and images render on the page', () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <HomePage />
          <Container data-testid="container">
            {card_content.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </Container>
          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    );
  
    const containerElement = screen.getByTestId('container');
    const cardTitleElements = within(containerElement).getAllByTestId('card-title-text');
    const cardBodyElements = within(containerElement).getAllByTestId('card-body-text');
    const cardImageElements = within(containerElement).getAllByTestId('card-image');
  
    expect(cardTitleElements.length).toBe(3);
    expect(cardBodyElements.length).toBe(3);
    expect(cardImageElements.length).toBe(3);
  });
  
  
  test('[4] Card titles and body text say the correct thing', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </ThemeProvider>
    );
  
    expect(getByText(card_1_title)).toBeInTheDocument();
    expect(getByText(card_1_text)).toBeInTheDocument();
    expect(getByText(card_2_title)).toBeInTheDocument();
    expect(getByText(card_2_text)).toBeInTheDocument();
  });
  
  
})