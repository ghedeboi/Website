import React from 'react';
import LinkIcon from './LinkIcon';

const Header = () => {
    return (
        <div className='item'>
            <div className='iteml1'>
                <img src="Icons/HeaderImg.png" alt="header image" className="header_image" />
            </div>
            <div className='iteml2'>
                <ul id="menu">
                    <LinkIcon id="1" src="Icons/EchoBash logo.png" alt="EchoBash logo" />
                    <LinkIcon id="2" src="Icons/Gallery.png" alt="Gallery" />
                    <LinkIcon id="3" src="Icons/Portfolio.png" alt="Portfolio" />
                    <LinkIcon id="4" src="Icons/YouTube.png" alt="Youtube" />
                    <LinkIcon id="5" src="Icons/Twitch.png" alt="Twitch" />
                    <LinkIcon id="6" src="Icons/TikTok.png" alt="TikTok" />
                    <LinkIcon id="7" src="Icons/Blog Entry.png" alt="Blog Entry" />
                    <LinkIcon id="8" src="Icons/Shop.png" alt="Shop" />
                    <LinkIcon id="9" src="Icons/FAQ.png" alt="FAQ" />
                </ul>
            </div>
        </div>
    );
};

export default Header;