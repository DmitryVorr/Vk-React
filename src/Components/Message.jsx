import React, { Component } from 'react';
import './CSS/Message.css';

class Message extends Component {
    render() {
        return (
            <div className='fullchats'>
                <div className='chatpannel'>
                    <div className='chatpannel1'>
                        <div className='chats-menu'>
                            <button className='chatpannel1-button'><img className='chatpannel1-button-icons' src="https://img.icons8.com/material-rounded/24/menu--v1.png" alt="" /></button>
                            <p>Чаты</p>
                        </div>
                        <div>
                            <button className='chatpannel1-button'><img className='chatpannel1-button-icons' src="https://img.icons8.com/material-rounded/24/add-phone.png" alt="" /></button>
                            <button className='chatpannel1-button'><img className='chatpannel1-button-icons' src="https://img.icons8.com/material-rounded/24/add-phone.png" alt="" /></button>
                            <button className='chatpannel1-button'><img className='chatpannel1-button-icons' src="https://img.icons8.com/material-rounded/24/add-phone.png" alt="" /></button>
                        </div>
                    </div>
                    <div className='chatpannel2'>
                        <input type="search" placeholder="Поиск" class="searchMessage"></input>
                    </div>
                    <div className='chatpannel3'>
                        <div>
                            <button className="chatpannel3-active">Все</button>
                            <button className='chatpanel3-button'>Учеба</button>
                            <button className='chatpanel3-button'>Бизнес</button>
                        </div>
                        <div>
                            <button className='chatpanel3-1-button'><img className='chatpannel3-button-icons' src="https://img.icons8.com/material-rounded/24/settings.png" alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className='chats'>
                    <div className='chat'>
                        <div className='message-info'>
                            <div className='friend-avatar'>
                                <img src="https://img.icons8.com/material-rounded/24/bookmark-ribbon--v1.png" alt="" />
                            </div>
                            <div className='last-info'>
                                <p>Избранное</p>
                                <div className='last-message'>
                                    <p>Вы: </p>
                                    <p className='p1'> Фотография</p>
                                    <p className='point'>·</p>
                                    <p>4 июля</p>
                                </div>
                            </div>
                        </div>
                        <div className='chat-info'>
                            <button className='chatpannel1-button'><img src="https://img.icons8.com/material-rounded/24/more.png" alt="" /></button>
                            <img width="24" height="24" src="https://img.icons8.com/?size=100&id=84094&format=png&color=11EEF9" alt="" />
                        </div>
                    </div>
                    <div className='chat'>
                        <div className='message-info'>
                            <div className='friend-avatar'>
                                <img src="https://img.icons8.com/material-rounded/24/bookmark-ribbon--v1.png" alt="" />
                            </div>
                            <div className='last-info'>
                                <p>Избранное</p>
                                <div className='last-message'>
                                    <p>Вы: </p>
                                    <p className='p1'> Фотография</p>
                                    <p className='point'>·</p>
                                    <p>4 июля</p>
                                </div>
                            </div>
                        </div>
                        <div className='chat-info'>
                            <button className='chatpannel1-button'><img src="https://img.icons8.com/material-rounded/24/more.png" alt="" /></button>
                            <img width="24" height="24" src="https://img.icons8.com/?size=100&id=84094&format=png&color=11EEF9" alt="" />
                        </div>
                    </div>
                    <div className='chat'>
                        <div className='message-info'>
                            <div className='friend-avatar'>
                                <img src="https://img.icons8.com/material-rounded/24/bookmark-ribbon--v1.png" alt="" />
                            </div>
                            <div className='last-info'>
                                <p>Избранное</p>
                                <div className='last-message'>
                                    <p>Вы: </p>
                                    <p className='p1'> Фотография</p>
                                    <p className='point'>·</p>
                                    <p>4 июля</p>
                                </div>
                            </div>
                        </div>
                        <div className='chat-info'>
                            <button className='chatpannel1-button'><img src="https://img.icons8.com/material-rounded/24/more.png" alt="" /></button>
                            <img width="24" height="24" src="https://img.icons8.com/?size=100&id=84094&format=png&color=11EEF9" alt="" />
                        </div>
                    </div>
                    <div className='chat'>
                        <div className='message-info'>
                            <div className='friend-avatar'>
                                <img src="https://img.icons8.com/material-rounded/24/bookmark-ribbon--v1.png" alt="" />
                            </div>
                            <div className='last-info'>
                                <p>Избранное</p>
                                <div className='last-message'>
                                    <p>Вы: </p>
                                    <p className='p1'> Фотография</p>
                                    <p className='point'>·</p>
                                    <p>4 июля</p>
                                </div>
                            </div>
                        </div>
                        <div className='chat-info'>
                            <button className='chatpannel1-button'><img src="https://img.icons8.com/material-rounded/24/more.png" alt="" /></button>
                            <img width="24" height="24" src="https://img.icons8.com/?size=100&id=84094&format=png&color=11EEF9" alt="" />
                        </div>
                    </div>
                    <div className='chat'>
                        <div className='message-info'>
                            <div className='friend-avatar'>
                                <img src="https://img.icons8.com/material-rounded/24/bookmark-ribbon--v1.png" alt="" />
                            </div>
                            <div className='last-info'>
                                <p>Избранное</p>
                                <div className='last-message'>
                                    <p>Вы: </p>
                                    <p className='p1'> Фотография</p>
                                    <p className='point'>·</p>
                                    <p>4 июля</p>
                                </div>
                            </div>
                        </div>
                        <div className='chat-info'>
                            <button className='chatpannel1-button'><img src="https://img.icons8.com/material-rounded/24/more.png" alt="" /></button>
                            <img width="24" height="24" src="https://img.icons8.com/?size=100&id=84094&format=png&color=11EEF9" alt="" />
                        </div>
                    </div>
                    <div className='chat'>
                        <div className='message-info'>
                            <div className='friend-avatar'>
                                <img src="https://img.icons8.com/material-rounded/24/bookmark-ribbon--v1.png" alt="" />
                            </div>
                            <div className='last-info'>
                                <p>Избранное</p>
                                <div className='last-message'>
                                    <p>Вы: </p>
                                    <p className='p1'> Фотография</p>
                                    <p className='point'>·</p>
                                    <p>4 июля</p>
                                </div>
                            </div>
                        </div>
                        <div className='chat-info'>
                            <button className='chatpannel1-button'><img src="https://img.icons8.com/material-rounded/24/more.png" alt="" /></button>
                            <img width="24" height="24" src="https://img.icons8.com/?size=100&id=84094&format=png&color=11EEF9" alt="" />
                        </div>
                    </div>
                    <div className='chat'>
                        <div className='message-info'>
                            <div className='friend-avatar'>
                                <img src="https://img.icons8.com/material-rounded/24/bookmark-ribbon--v1.png" alt="" />
                            </div>
                            <div className='last-info'>
                                <p>Избранное</p>
                                <div className='last-message'>
                                    <p>Вы: </p>
                                    <p className='p1'> Фотография</p>
                                    <p className='point'>·</p>
                                    <p>4 июля</p>
                                </div>
                            </div>
                        </div>
                        <div className='chat-info'>
                            <button className='chatpannel1-button'><img src="https://img.icons8.com/material-rounded/24/more.png" alt="" /></button>
                            <img width="24" height="24" src="https://img.icons8.com/?size=100&id=84094&format=png&color=11EEF9" alt="" />
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
}

export default Message;
