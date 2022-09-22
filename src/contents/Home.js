import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/photo.png';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am ASLAM NOOR','I am a WEB DEVELOPER']} speed={50} eraseDelay={900}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    