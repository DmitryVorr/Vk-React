import React from 'react';
import './CSS/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <div className='logo-container'>
                    <img
                        src="https://cdn-icons-png.flaticon.com/256/187/187873.png"
                        alt="VK Logo"
                        className="vk_logo"
                    />
                </div>
                <input type="search" placeholder="Поиск" className="search" />
                <div className='h_a_container'>
                    <a href="#" className="h_a">
                        <img
                            src="https://img.icons8.com/material-rounded/24/appointment-reminders.png"
                            className="h_a_i"
                            alt="Notifications"
                        />
                    </a>
                    <a href="#" className="h_a">
                        <img
                            src="https://img.icons8.com/material-rounded/24/music--v2.png"
                            className="h_a_i"
                            alt="Music"
                        />
                    </a>
                </div>
                <div className="header-avatar">
                    <div className="avatarka">
                        <img
                            src="https://i.pinimg.com/736x/d9/21/eb/d921eba0d3938c678ceacb4a008718d2.jpg"
                            alt="avatar"
                            className="avatar"
                        />
                        <img
                            src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png"
                            className="arrow"
                            alt="Expand"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
