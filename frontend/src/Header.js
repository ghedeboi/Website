import React from 'react';

const Header = () => {
    return (
        <div className='item'>
            <div className='iteml1'>
                <img src="Icons/HeaderImg.png" alt="header image" className="header_image" />
            </div>
            <div className='iteml2'>
                <ul id="menu">
                    <li className='list'>
                        <a href="#" className="link_icon" target="_blank" rel="noopener noreferrer">
                            <img src="Icons/EchoBash logo.png" alt="EchoBash logo" />
                        </a>
                    </li>
                    <li className='list'>
                        <a href="#" className="link_icon" target="_blank" rel="noopener noreferrer">
                            <img src="Icons/Gallery.png" alt="Gallery" />
                        </a>
                    </li>
                    <li className='list'>
                        <a href="#" className="link_icon" target="_blank" rel="noopener noreferrer">
                            <img src="Icons/Portfolio.png" alt="Portfolio" />
                        </a>
                    </li>
                    <li className='list'>
                        <a href="#" className="link_icon" target="_blank" rel="noopener noreferrer">
                            <img src="Icons/YouTube.png" alt="YouTube" />
                        </a>
                    </li>
                    <li className='list'>
                        <a href="#" className="link_icon" target="_blank" rel="noopener noreferrer">
                            <img src="Icons/Twitch.png" alt="Twitch" />
                        </a>
                    </li>
                    <li className='list'>
                        <a href="#" className="link_icon" target="_blank" rel="noopener noreferrer">
                            <img src="Icons/TikTok.png" alt="TikTok" />
                        </a>
                    </li>
                    <li className='list'>
                        <a href="#" className="link_icon" target="_blank" rel="noopener noreferrer">
                            <img src="Icons/Blog Entry.png" alt="Blog Entry" />
                        </a>
                    </li>
                    <li className='list'>
                        <a href="#" className="link_icon" target="_blank" rel="noopener noreferrer">
                            <img src="Icons/Shop.png" alt="Shop" />
                        </a>
                    </li>
                    <li className='list'>
                        <a href="#" className="link_icon" target="_blank" rel="noopener noreferrer">
                            <img src="Icons/FAQ.png" alt="FAQ" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;