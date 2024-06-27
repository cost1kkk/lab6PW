// src/styles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');

  * {
    background-color: var(--background-color);
    color: var(--primary-text-color);
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    transition: background-color 0.3s, color 0.3s; /* Smooth transition for theme changes */
  }

  :root {
    --background-color: #f5f5dc; /* Beige for light mode */
    --primary-text-color: #0a0a0a;
    --secondary-text-color: #fff;
    --toggle-bg: #ffd000;
    --toggle-fg: #333;
  }

  .navbar {
    align-items: center;
    border: #0a0a0a;
    display: inline-flex;
    font-size: large;
    justify-content: space-evenly;
    margin: 0;
    padding: 2%;
    position: fixed;
    text-decoration: none;
    top: 0;
    width: 100%;
  }

  .navbar h1 {
    color: #37b6c7;
  }

  .navbar h1:hover {
    color: #7fffd4;
  }

  .navbar .links {
    align-items: center;
    display: inline-flex;
    justify-content: space-between;
    width: 40%;
  }

  .navbar a {
    text-decoration: none;
  }

  .navbar a:hover {
    color: red;
    font-weight: bolder;
  }

  .content {
    margin: 10% auto;
    max-width: 100%;
    padding: 2%;
  }

  .best {
    align-content: space-between;
    display: inline-flex;
    justify-content: space-between;
    margin-left: 5%;
    padding-bottom: 130px;
    width: 90%;
  }

  .director {
    padding-top: 3%;
  }

  .liked {
    max-height: 20px;
    padding-left: 48%;
  }

  .liked:hover {
    fill: red;
    opacity: 80%;
  }

  button {
    position: fixed;
    bottom: 10px;
    right: 10px;
    padding: 10px 20px;
    background-color: var(--toggle-bg);
    color: var(--toggle-fg);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.8;
  }

   [data-theme='dark'] {
    --background-color: #121212;
    --foreground-color: #567aff;
    --primary-text-color: #f6f6f6;
    --secondary-text-color: #0a0a0a;
    --toggle-bg: #283452;
    --toggle-fg: #00a6ff;
  }
`;
