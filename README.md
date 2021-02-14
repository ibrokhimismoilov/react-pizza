/*==========================================================================================*/
**router dom ulash**
// using ES6 modules
terminal: npm install --save react-router-dom
import { BrowserRouter, Route, Link } from "react-router-dom";
 
// using CommonJS modules
const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;
The UMD build is also available on unpkg:
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

/*==========================================================================================*/

**bootstrap ulash**
terminal: npm install react-bootstrap bootstrap

// Foydalanish
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// or less ideally
import { Button, Container } from 'react-bootstrap';


/*==========================================================================================*/

**styled-components**
terminal: npm install --save styled-components

//Foydalanish
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);