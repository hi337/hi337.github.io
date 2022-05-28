import './App.css';
import logo from "./img/logo.jpg"
import {FaBars} from "react-icons/fa"
import { useState } from 'react';
import {IconButton, Button, List, ListItemText, Divider, Container} from '@mui/material'
import ProjectCards from "./components/ProjectCards"
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  const [navState, setNavState] = useState(false)

  return (
    <Container className="App" maxWidth={"lg"}>
      <nav className={navState ? "topnav responsive" : "topnav"} id='topnavid'>
        <img width={120} height={120} src={logo}></img>
        <a href='#contact-me'>Contact</a>
        <a href='#projects'>Projects</a>
        <a href='#expirience'>Expirience</a>
        <IconButton variant='text' onClick={() => setNavState(!navState)} className="icon">
          <FaBars size={28}/>
        </IconButton>
      </nav>
      <div className='intro'>
        <h1>Hello, I'm Rateb.</h1>
        <p>I am a software developer in Edmonton, Alberta. <br/> I specialize in front-end mobile and web development, but can do much more.<br/>I live and breate code.</p>
        <Button variant='outlined'>Resume Coming Soon...</Button>
      </div>
      <div className='Expirience' id='expirience'>
        <h2>My Languages:</h2>
        <List>
          <ListItemText primary="Javascript" secondary="My most used language is definatly javascript. I use the NodeJS ecosystem mainly for React and React Native development."></ListItemText>
          <Divider/>
          <ListItemText primary="Python 3" secondary='I am very familiar with Python and have been using it for years. I used it mainly to learn ML and Tensorflow. Also use it to test algorithims before C/C++ implementation.'></ListItemText>
          <Divider/>
          <ListItemText primary="C/C++" secondary="I have expirience implementing all sorts of algorithims with C/C++, mainly for the purpose of competitive programming. But, for the moment, I have yet to utilize them for any big projects."></ListItemText>
        </List>
        <h2>My Ecosystems:</h2>
        <List>
          <ListItemText primary="React Native" secondary="By far, my most competent development environment is React Native. I have used it for many projects from a full-stack food delivery app to tesing out TFLite, it's definitly my strongest suit."></ListItemText>
          <Divider/>
          <ListItemText primary="Tensorflow" secondary="At the moment, I have some expirience with TensorFlow in Python. Though I don't use it much at the moment, it is still a tool I plan to continue to learn for future use."></ListItemText>
          <Divider/>
          <ListItemText primary="ExpressJS with MongoDB" secondary='I have minimal experience in backend development with the ExpressJS framework and MongoDB Atlas.'></ListItemText>
        </List>
        <h2>What I'm Learning:</h2>
        <List>
          <ListItemText primary="React" secondary="Already being well aquainted with React Native, I am currently learning the React library. In fact, this website is built on it!"></ListItemText>
        </List>
        <h2>Certifications:</h2>
        <List>
          <ListItemText primary="CS50 Introduction to AI with Python" secondary="This CS50 course introduced me to the basics of machine learning and implementation in Python and its libraries, including Tensorflow."></ListItemText>
        </List>
      </div>
      <div className='Projects' id='projects'>
        <h2>My Projects:</h2>
        <ProjectCards/>
      </div>
      <div className='Contact-Me' id='contact-me'>
        <h2>Contact Me:</h2>
        <ContactMe/>
      </div>
      <Footer/>
    </Container>
  );
}

export default App;
