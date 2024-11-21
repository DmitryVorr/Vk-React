import React, { Component } from 'react';
import './CSS/Navbar.css';

class Navbar extends Component {
    render() {
        return (
                <nav className="sidebar">
                    <ul>
                        <li><a href="Home"><img src="https://img.icons8.com/material-outlined/24/user-male-circle.png" alt="Моя страница" className="blue-icon"/> Моя страница</a></li>
                        <li><a href="/News"><img src="https://img.icons8.com/material-rounded/24/news.png" alt="Новости" className="blue-icon"/> Новости</a></li>
                        <li><a href="/messenger"><img src="https://img.icons8.com/material-rounded/24/mail-account.png" alt="Мессенджер" className="blue-icon"/> Мессенджер</a></li>
                        <li><a href="calls.html"><img src="https://img.icons8.com/material-rounded/24/phone--v1.png" alt="Звонки" className="blue-icon"/> Звонки</a></li>
                        <li><a href="friends.html"><img src="https://img.icons8.com/material-rounded/24/user-group-man-man.png" alt="Друзья" className="blue-icon"/> Друзья</a></li>
                        <li><a href="groups.html"><img src="https://img.icons8.com/material-rounded/24/conference-call.png" alt="Сообщества" className="blue-icon"/> Сообщества</a></li>
                        <li><a href="photos.html"><img src="https://img.icons8.com/material-rounded/24/image.png" alt="Фотографии" className="blue-icon"/> Фотографии</a></li>
                        <li><a href="music.html"><img src="https://img.icons8.com/material-rounded/24/music--v2.png" alt="Музыка" className="blue-icon"/> Музыка</a></li>
                        <li><a href="clips.html"><img src="https://img.icons8.com/material-rounded/24/play--v1.png" alt="Клипы" className="blue-icon"/> Клипы</a></li>
                        <li><a href="game.html"><img src="https://img.icons8.com/material-rounded/24/controller.png" alt="Игры" className="blue-icon"/> Игры</a></li>
                        <li><a href="stickers.html"><img src="https://img.icons8.com/material-rounded/24/happy--v1.png" alt="Стикеры" className="blue-icon"/> Стикеры</a></li>
                        <li><a href="market.html"><img src="https://img.icons8.com/material-rounded/24/box.png" alt="Маркет" className="blue-icon"/> Маркет</a></li>
                    </ul>
                </nav>
        );
    }
}

export default Navbar;
