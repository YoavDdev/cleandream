import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Color Palette - White and Blue */
    --primary-blue: #1e88e5;
    --secondary-blue: #0d47a1;
    --light-blue: #bbdefb;
    --very-light-blue: #e3f2fd;
    --white: #ffffff;
    --light-gray: #f5f5f5;
    --dark-gray: #333333;
    --text-color: #212121;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    direction: rtl;
  }

  body {
    font-family: 'Heebo', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--white);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: var(--secondary-blue);
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
  }

  h2:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: var(--primary-blue);
    margin: 0.8rem auto;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--primary-blue);
    transition: all 0.3s ease;
  }

  a:hover {
    color: var(--secondary-blue);
  }

  section {
    padding: 4rem 0;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  button, .btn {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    border-radius: 30px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 0.5rem;
    border: none;
    font-family: 'Heebo', sans-serif;
  }

  .primary-btn {
    background-color: var(--primary-blue);
    color: var(--white);
    border: 2px solid var(--primary-blue);
  }

  .primary-btn:hover {
    background-color: var(--secondary-blue);
    border-color: var(--secondary-blue);
    color: var(--white);
  }

  .secondary-btn {
    background-color: transparent;
    color: var(--primary-blue);
    border: 2px solid var(--primary-blue);
  }

  .secondary-btn:hover {
    background-color: var(--light-blue);
    color: var(--secondary-blue);
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }
    
    h2 {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
    
    h2 {
      font-size: 1.8rem;
    }
  }
`;

export default GlobalStyles;
