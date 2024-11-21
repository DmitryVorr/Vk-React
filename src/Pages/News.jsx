import React, { Component } from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Lenta from '../Components/lenta';
import NewsSetting from '../Components/NewsSetting';
import MaybeFriend from '../Components/MaybeFriend';
import './CSS/News.css';

class News extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='fullpage'>
                    <Navbar />
                    <Lenta />
                    <div className='Rightbar'>
                        <NewsSetting />
                        <MaybeFriend />
                    </div>
                </div>
            </div>
        );
    }
}

export default News;