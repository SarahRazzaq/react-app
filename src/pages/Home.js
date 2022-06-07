import React from 'react'
import windy from '../images/image_sarah.jpg'
import Styles from "../App.css"
import About from './About';
import { useState } from "react";
import { Link } from 'react-router-dom';


function Home() {
    const [openAbout, setOpenAbout] = useState (false);
  return (
    <div className='container'>
        <h1>This Is Me</h1>
        <div className='text-container'>
        <h2>My name is Sarah and I'm 37 years old. I currently study FrontEnd Development and work as a chief of staff at a local company. My biggest interest in life is MUSIC. I come from a family with a musical history and where music is a big part us. In many ways, music is what holds us together.</h2>
        </div>
        <img src={windy} alt="windy-hair"/>
        <Link to="/about"><button className='openAboutBtn'>
              About 
            </button>
          </Link>
    </div>
  )
}

export default Home;