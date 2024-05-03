import './leftSide.css';
import Avatar from '../Avatar'
import { home, explore, twitter, notifications, messages, bookmarks, lists, communities, profile, more, dots } from './icons'
import React, { useState } from 'react';
const LeftSide = () => {
    const [activeLink, setActiveLink] = useState(window.location.pathname);

    const handleClick = (link) => {
        setActiveLink(link);
    };
      
    return(
        <div className='left-side'>
            <div className="container">
                <header>{twitter}</header>
                <nav>
                    <ul>
                        <li><a href="/" className={activeLink === '/' ? 'active' : ''} onClick={() => handleClick('/')}><span>{home} Home</span></a></li>
                        <li><a href="/explore" className={activeLink === '/explore' ? 'active' : ''} onClick={() => handleClick('/explore')}><span>{explore}Explore</span></a></li>
                        <li><a href="/notification" className={activeLink === '/notification' ? 'active' : ''} onClick={() => handleClick('/notification')}><span>{notifications}Notification</span></a></li>
                        <li><a href="/messages" className={activeLink === '/messages' ? 'active' : ''} onClick={() => handleClick('/messages')}><span>{messages}Messages</span></a></li>
                        <li><a href="/lists" className={activeLink === '/lists' ? 'active' : ''} onClick={() => handleClick('/lists')}><span>{lists}Lists</span></a></li>
                        <li><a href="/bookmarks" className={activeLink === '/bookmarks' ? 'active' : ''} onClick={() => handleClick('/bookmarks')}><span>{bookmarks}Bookmarks</span></a></li>
                        <li><a href="/communities" className={activeLink === '/communities' ? 'active' : ''} onClick={() => handleClick('/communities')}><span>{communities}Communities</span></a></li>
                        <li><a href="/profile" className={activeLink === '/profile' ? 'active' : ''} onClick={() => handleClick('/profile')}><span>{profile} Profile </span></a></li>
                    </ul>
                    <button className="more"><span>{more} More</span></button>
                </nav>
                <button className="postButton">Post</button>
                <footer>
                    <button className="account">
                        <Avatar name='Seema Nassar' src='https://pbs.twimg.com/profile_images/1681577524294303746/Z6487-0G_normal.jpg'/>
                        <div>
                            <div className="name">Seema Nassar</div>
                            <div className="username">@NassarSeema</div>
                        </div>
                        <div>
                            {dots}
                        </div>
                    </button>
                </footer>
            </div>
        </div>
    )
}
export default LeftSide