import React, { Component } from 'react';
import './CSS/Vkprofile.css';

class Vkprofile extends Component {
    state = {
        activeSection: 'photo',
        activeLentaSection: 'AllPosts',
    };

    setActiveSection = (section) => {
        this.setState({ activeSection: section });
    };

    setActiveLentaSection = (section) => {
        this.setState({ activeLentaSection: section });
    };

    render() {
        const { activeSection, activeLentaSection } = this.state;

        return (
            <div className='profilepage'>
                <div className='profilecont'>
                    <section className="profile">
                        <div className="profilebox">
                            <div className="profileavatar">
                                <img src="https://i.pinimg.com/originals/a2/f3/d2/a2f3d27d6032369b7414a0f0583f747c.jpg" alt="Avatar" />
                            </div>
                            <div className="userbox">
                                <div className="username">
                                    <p className="username-name">
                                        Воронов Дмитрий
                                        <img src="https://sun4-21.userapi.com/mhWROFlWpzhrzifE1UrY9PW9HxqqskH8iW5f-Q/l-8mh4kaYDY.png" className="status" alt="Status" />
                                    </p>
                                    <p className="username-description">...апоп</p>
                                    <div className="username-links">
                                        <a href="https://rutube.ru/video/c6cc4d620b1d4338901770a44b3e82f4/" className="username-description-link">
                                            <img src="https://img.icons8.com/material-rounded/24/marker.png" alt="Location" /> Новосибирск
                                        </a>
                                        <a href="https://rutube.ru/video/c6cc4d620b1d4338901770a44b3e82f4/" className="username-description-link">
                                            <img src="https://img.icons8.com/material-rounded/24/suitcase.png" alt="Work" /> НГУЭУ
                                        </a>
                                        <a href="https://rutube.ru/video/c6cc4d620b1d4338901770a44b3e82f4/" className="username-description-link">
                                            <img src="https://img.icons8.com/material-rounded/24/info.png" alt="Details" /> Подробнее
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="profilebutton">
                                <button>Редактировать профиль</button>
                                <button>Ещё</button>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='profileboxbox'>
                    <div className='profile-lenta'>
                        <div className='sectionsbox'>
                            <div className="sections-menu">
                                <button
                                    className={activeSection === 'music' ? 'active' : ''}
                                    onClick={() => this.setActiveSection('music')}><img src="https://img.icons8.com/material-rounded/24/image.png" alt="Музыка" />
                                    Фото
                                </button>
                                <button
                                    className={activeSection === 'photo' ? 'active' : ''}
                                    onClick={() => this.setActiveSection('photo')}><img src="https://img.icons8.com/material-rounded/24/music--v2.png" alt="Фотографии" />
                                    Музыка
                                </button>
                                <button
                                    className={activeSection === 'albums' ? 'active' : ''}
                                    onClick={() => this.setActiveSection('albums')}><img src="https://img.icons8.com/material-rounded/24/stack-of-photos.png" alt="Альбомы" />
                                    Альбомы
                                </button>
                                <button
                                    className={activeSection === 'nft' ? 'active' : ''}
                                    onClick={() => this.setActiveSection('nft')}><img src="https://img.icons8.com/material-rounded/24/play--v1.png" alt="NFT" />
                                    Клипы
                                </button>
                                <button
                                    className={activeSection === 'clips' ? 'active' : ''}
                                    onClick={() => this.setActiveSection('clips')}><img src="https://img.icons8.com/material-rounded/24/news.png" alt="Клипы" />
                                    Статьи
                                </button>
                            </div>

                            <div class="sections">
                                <a href="https://i.pinimg.com/736x/8c/e2/8f/8ce28f42af138e3b66700de62ee58a9e.jpg">
                                    <img src="https://i.pinimg.com/736x/8c/e2/8f/8ce28f42af138e3b66700de62ee58a9e.jpg"
                                        className="profile-photos" alt="profile-photos" />
                                </a>
                                <a href="https://i.pinimg.com/736x/ac/28/61/ac286191a5627d6276469f9221649a03.jpg">
                                    <img src="https://i.pinimg.com/736x/ac/28/61/ac286191a5627d6276469f9221649a03.jpg"
                                        className="profile-photos" alt="profile-photos" />
                                </a>
                                <a href="https://i.pinimg.com/736x/33/e9/57/33e957c812fffd2562eb4fd010ad6b7a.jpg">
                                    <img src="https://i.pinimg.com/736x/33/e9/57/33e957c812fffd2562eb4fd010ad6b7a.jpg"
                                        className="profile-photos" alt="profile-photos" />
                                </a>
                                <a href="https://i.pinimg.com/originals/21/b3/8f/21b38faad9909fa7754a6789dc33315d.jpg">
                                    <img src="https://i.pinimg.com/originals/21/b3/8f/21b38faad9909fa7754a6789dc33315d.jpg"
                                        className="profile-photos" alt="profile-photos" />
                                </a>
                                <a href="https://i.pinimg.com/564x/49/22/4c/49224caba8703ed91eedf9d28f0530e7.jpg">
                                    <img src="https://i.pinimg.com/564x/49/22/4c/49224caba8703ed91eedf9d28f0530e7.jpg"
                                        className="profile-photos" alt="profile-photos" />
                                </a>
                                <a href="https://i.pinimg.com/564x/a1/78/d9/a178d9bf890f18fb1b9c5c22dc7f6a92.jpg">
                                    <img src="https://i.pinimg.com/564x/a1/78/d9/a178d9bf890f18fb1b9c5c22dc7f6a92.jpg"
                                        className="profile-photos" alt="profile-photos" />
                                </a>
                            </div>


                            <div className="profile-buttons">
                                <button>Загрузить фото</button>
                                <button>Показать всё</button>
                            </div>
                        </div>
                    </div>


                    <div className='rightbar'>
                        <div className='friendsbox'>
                            <div className='friendstext'>
                                <a>Друзья онлайн</a>
                                <div className='friendsnumber'>2</div>
                            </div>

                            <div className='friendsimg'>
                                <a><img src="https://i.pinimg.com/736x/d9/21/eb/d921eba0d3938c678ceacb4a008718d2.jpg" />Дмитрий</a>
                                <a><img src="https://i.pinimg.com/736x/d9/21/eb/d921eba0d3938c678ceacb4a008718d2.jpg" />Алексей</a>
                            </div>
                            <hr className="divider"></hr>
                            <div className='friendstext'>
                                <a>Друзья</a>
                                <div className='friendsnumber'>19</div>
                            </div>

                            <div className='friendsimg'>
                                <a><img src="https://i.pinimg.com/736x/d9/21/eb/d921eba0d3938c678ceacb4a008718d2.jpg" />Дмитрий</a>
                                <a><img src="https://i.pinimg.com/736x/d9/21/eb/d921eba0d3938c678ceacb4a008718d2.jpg" />Алексей</a>
                                <a><img src="https://i.pinimg.com/736x/d9/21/eb/d921eba0d3938c678ceacb4a008718d2.jpg" />Антон</a>
                                <a><img src="https://i.pinimg.com/736x/d9/21/eb/d921eba0d3938c678ceacb4a008718d2.jpg" />Илья</a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Vkprofile;