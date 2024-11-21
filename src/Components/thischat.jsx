import React, { Component } from 'react';
import './CSS/Thischat.css';

class thischat extends Component {
    render() {
        return (
            <div className='thischat'>
                <div className='thischat-message'>
                    <img className='img-icon' src="https://img.icons8.com/material-rounded/24/communication.png" alt="thischat-icon" />
                    <p>Выберите чат</p>
                    <p>или создайте новый</p>
                </div>
            </div>
        );
    }
}

export default thischat;
