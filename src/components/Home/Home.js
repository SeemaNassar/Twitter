import './Home.css';
import Post from './Post'
import SuggestedFollow from './SuggestedFollow';
import Widgets from '../rightSide/Widgets';
import React, { useState ,useEffect} from 'react';
import {back , notifications , dots ,link , dates} from '../leftSide/icons'
function Profile ({ isFollowing, setIsFollowing, handleMouseEnter, handleMouseLeave }){

    
    return(
        <div>
            <div className="backgroundImg">
                <img alt="" draggable="true" src="https://pbs.twimg.com/profile_banners/1566463268/1470764371/600x200"/>
            </div>
            <div className="container">
                <div className='topProfile'>
                    <div className='UserAvatar'>
                        <a href="/editProfile">
                            <img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_200x200.png" alt="Profile Image" />
                        </a> 
                    </div>
                    <div className='UserActions'>
                        <button className='more'>{dots}</button>
                        <button className='notification'>{notifications}</button>
                        <button
                            className='following'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            {isFollowing ? 'Unfollow' : 'Following'}
                        </button>
                    </div>
                </div>
                <div>
                    <div className="name">React</div>
                    <div className="username">@reactjs</div>
                </div>
                <div className='UserDescription'>
                    The library for web and native user interfaces
                </div>
                <div className='UserDetails'>
                    <a href=""><span>{link} react.dev</span></a>
                    <span>{dates} Joined July 2013</span>
                </div>
                <div className='UserStatistics'>
                    <a href="">
                        <span>267</span>
                        <span>Following</span>
                    </a>
                    <a href="">
                        <span>751.5K</span>
                        <span>Followers</span>
                    </a>
                </div>
                <div className="MutualFriends">
                    <div className="friendsImg">
                        <div className="imgs first">
                            <img alt="" src="https://pbs.twimg.com/profile_images/1756769065786318848/glKwFKvw_mini.jpg" />
                        </div>
                        <div className="imgs second">
                            <img alt="" src="https://pbs.twimg.com/profile_images/1611375309852385281/FmMes7R__mini.jpg" />
                        </div>
                        <div className="imgs third">
                            <img alt="" src="https://pbs.twimg.com/profile_images/1334976412462305287/v7zZuRtj_mini.jpg" />
                        </div>
                    </div>
                    
                    <div className="names">Followed by
                        &nbsp;<span>عادل | مبرمج</span>
                        ,&nbsp;<span>Misk</span>
                        ,&nbsp;and 3 others you follow
                    </div>
                </div>
            </div>
        </div>
    )
}

function Actions (){
    const [activeLink, setActiveLink] = useState(window.location.pathname);
    const handleClick = (link) => {
        setActiveLink(link);
    };
    return(
        <div className='ProfileActions'>
            <a href='/' className={`action ${activeLink === '/' ? 'active' : ''}`}><span>Posts</span></a>
            <a href='/replies' className={`action ${activeLink === '/replies' ? 'active' : ''}`}><span>Replies</span></a>
            <a href='/media' className={`action ${activeLink === '/media' ? 'active' : ''}`}><span>Media</span></a>
            <a href='/likes' className={`action ${activeLink === '/likes' ? 'active' : ''}`}><span>Likes</span></a>
        </div> 
    )

}
const Home =() => {
    const [isFollowing, setIsFollowing] = useState(false);
    const [showHeaderButton, setShowHeaderButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const oneThirdPageHeight = window.innerHeight / 3;
            setShowHeaderButton(scrollTop >= oneThirdPageHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMouseEnter = () => {
        setIsFollowing(true);
    };
    
    const handleMouseLeave = () => {
        setIsFollowing(false);
    };
    return(
        <div className="home">
            <header>
                <div className='back'><a href="/">{back}</a></div>
                <div>
                    <div className="name">React</div>
                    <div className="postsNumber">2.665 posts</div>
                </div>
                {showHeaderButton && (
                <button 
                    className='following'         
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    {isFollowing ? 'Unfollow' : 'Following'}
                </button>
                )}
            </header>
            <body>
                <Profile 
                isFollowing={isFollowing} 
                setIsFollowing={setIsFollowing}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                />

                <Actions />

                <Post
                verified={true}
                userName="reactjs"
                displayName="React"
                text={`React Conf is back for 2024! Join our co-hosts @Meta and @callstackio May 15-16 in Henderson, Nevada or join the free livestream.\nSign up here for updates:`}
                image = "https://pbs.twimg.com/media/GMlumCKaYAE3ybd?format=jpg&amp;name=small"
                />

                <Post
                verified={true}
                userName="reactjs"
                displayName="React"
                text={`React Conf is back for 2024! Join our co-hosts @Meta and @callstackio May 15-16 in Henderson, Nevada or join the free livestream.\nSign up here for updates:`}
                image = "https://pbs.twimg.com/media/GMlumCKaYAE3ybd?format=jpg&amp;name=small"
                />

                <SuggestedFollow />

                <Post
                verified={true}
                userName="reactjs"
                displayName="React"
                text={`React Conf is back for 2024! Join our co-hosts @Meta and @callstackio May 15-16 in Henderson, Nevada or join the free livestream.\nSign up here for updates:`}
                image = "https://pbs.twimg.com/media/GMlumCKaYAE3ybd?format=jpg&amp;name=small"
                />

            </body>
        </div>
    )
}
export default Home