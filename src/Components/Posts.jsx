import React, { Component } from 'react';
import './CSS/Posts.css';

class Posts extends Component {
    state = {
        activeSection: 'photo',
    };

    render() {
        const { activeSection } = this.state;

        return (
            <div class="posts">
                <div class="newposts">
                    <div class="newposts-text">
                        <div class="newposts-avatar">
                            <img src="https://i.pinimg.com/736x/d9/21/eb/d921eba0d3938c678ceacb4a008718d2.jpg"
                                alt="newposts-avatar" class="newposts-avatar"></img>
                            <input type="text" id="textInput" class="newposts-vvod"
                                placeholder="Что у вас нового?" />
                        </div>
                    </div>
                    <div class="newposts-buttons">
                        <button><img src="https://img.icons8.com/material-outlined/24/camera--v2.png"
                            class="newposts-icons" alt="foto-icons" /></button>
                        <button><img src="https://img.icons8.com/material-outlined/24/video.png"
                            class="newposts-icons" alt="video-icons" /></button>
                        <button><img src="https://img.icons8.com/material-outlined/24/apple-music.png"
                            class="newposts-icons" alt="music-icons" /></button>
                        <button><img src="https://img.icons8.com/material-rounded/24/news.png"
                            class="newposts-icons" alt="news-icons" /></button>
                        <button><img src="https://img.icons8.com/material-rounded/24/play--v1.png"
                            class="newposts-icons" alt="klips-icons" /></button>
                    </div>
                </div>
                <div class="first-post">
                    <div class="first-post-menu">
                        <div class="firsts-post-sections-menu">
                            <button class="active" onclick="setActiveSection('photo')">Все записи</button>
                            <button onclick="setActiveSection('mussic')">Мои записи</button>
                            <button onclick="setActiveSection('albums')">Архив записей</button>
                        </div>
                        <div class="newposts-buttons">
                            <button><img src="https://img.icons8.com/material-outlined/24/search--v1.png"
                                class="first-icon" /></button>
                        </div>
                    </div>
                    <div class="post">
                        <div class="post-profile">
                            <div class="post-profile-info">
                                <img src="https://i.pinimg.com/736x/d9/21/eb/d921eba0d3938c678ceacb4a008718d2.jpg"
                                    alt="posts-avatar" class="posts-avatar"></img>
                                <div class="profilename">
                                    <a class="postname" href="#b1b1zyan">Воронов Дмитрий</a>
                                    <div class="post-status">
                                        <p>1 ноя 2023</p>
                                        <p>·</p>
                                        <p>обновлено фото</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="post-napolnenie">
                            <img src="https://i.pinimg.com/736x/1d/80/15/1d801598c2eae327d287d0c71318352b.jpg"
                                alt="post-img" class="post-img"></img>
                        </div>
                        <div class="post-reaction">
                            <div class="reaction">
                                <button><img src="https://img.icons8.com/material-outlined/24/filled-like.png"
                                    class="first-icon" />400</button>
                                <button><img src="https://img.icons8.com/material-outlined/24/topic--v1.png"
                                    class="first-icon" />105</button>
                                <button><img src="https://img.icons8.com/material-outlined/24/share.png"
                                    class="first-icon" />50</button>
                            </div>
                            <div class="viewers">
                                <img src="https://img.icons8.com/material-outlined/24/visible--v1.png"
                                    class="first-icon" />
                                <p class="view">412</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;