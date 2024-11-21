import React, { Component } from 'react';
import './CSS/lenta.css';

class lenta extends Component {
    render() {
        return (
            <section className="lenta">
                <div className='fullpost'>
                    <div className='post'>
                        <div className='post-info'>
                            <div className='public-avatar'>
                                <img src="https://i.pinimg.com/736x/7c/56/64/7c5664832c9b5749d1a485965fadced2.jpg" alt="" />
                            </div>
                            <div className='last-info'>
                                <p>Арбуз Арбуз</p>
                                <div className='last-redakt'>
                                    <p className='p'> Три часа назад</p>
                                    <p className='point'>·</p>
                                    <p>от Резникова Арсения</p>
                                </div>
                            </div>
                        </div>
                        <div className='post-info'>
                            <button className='chatpannel1-button'><img src="https://img.icons8.com/material-rounded/24/more.png" alt="" /></button>
                        </div>
                    </div>
                    <div className='post-img'>
                        <img className='img-in-post' src="https://i.pinimg.com/736x/3e/50/5d/3e505dcb08e5391247a279be59a5bdcf.jpg" alt="" />
                    </div>
                    <div className='fullreaction'>
                        <div className='reaction'>
                            <button> <img src="https://img.icons8.com/material-rounded/24/filled-like.png" alt="" />400</button>
                            <button> <img src="https://img.icons8.com/material-rounded/24/topic.png" alt="" />105</button>
                            <button> <img src="https://img.icons8.com/material-rounded/24/forward-arrow.png" alt="" />50</button>
                        </div>
                        <div class="viewer">
                            <img src="https://img.icons8.com/material-outlined/24/visible--v1.png"
                                class="first-icon" />
                            <p class="views">412</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default lenta;