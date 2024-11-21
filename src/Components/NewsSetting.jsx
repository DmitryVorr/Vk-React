import React, { Component } from 'react';
import './CSS/NewsSetting.css';

class NewsSetting extends Component {
    render() {
        return (
            <div className='Lenta-setting'>
                <div className='fullsetting'>
                    <div className='setting1'>
                        <div>
                            <p>Новости</p>
                        </div>
                        <div className='setting-button'>
                            <div>
                                <img src="https://img.icons8.com/material-rounded/24/settings.png" alt="" />
                            </div>
                            <div>
                                <img src="https://img.icons8.com/material-rounded/24/plus-math--v1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='setting'>
                        <div>
                            <p>Фотографии</p>
                        </div>
                    </div>
                    <div className='setting'>
                        <div>
                            <p>Рекомендации</p>
                        </div>
                    </div>
                    <div className='setting'>
                        <div>
                            <p>Трансляции</p>
                        </div>
                    </div>
                    <div className='setting'>
                        <div>
                            <p>Поиск</p>
                        </div>
                    </div>
                    <divider className='divider'>

                    </divider>
                    <div className='setting'>
                        <div>
                            <p>Реакции</p>
                        </div>
                    </div>
                    <div className='setting'>
                        <div>
                            <p>Комментарии</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsSetting;