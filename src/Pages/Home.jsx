import React, { Component } from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Vkprofile from '../Components/Vkprofile';
import Posts from '../Components/Posts';
import './CSS/Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='bodybox'>
                    <div className='fullpageHome'>
                        <Navbar />
                        <Vkprofile />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
