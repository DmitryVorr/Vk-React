import React, { Component } from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Message from '../Components/Message';
import Thischat from '../Components/thischat';
import './CSS/Messenger.css';

class Messenger extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='fullpage'>
                    <Navbar />
                    <div className='message'>
                        <Message />
                        <Thischat />
                    </div>
                </div>
            </div>
        );
    }
}

export default Messenger;