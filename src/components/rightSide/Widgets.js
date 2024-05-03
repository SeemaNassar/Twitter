import React from 'react';
import './Widgets.css';
import { dots, explore , verifiedIcon} from '../leftSide/icons';
import Avatar from '../Avatar';
const Search = () => {
    return(
        <form action="" className='search-form'>
        <div class="search">
            <span className='search-icon' >{explore}</span>
            <input type="search" placeholder="Search" className='search-input' />
        </div>
        </form>

    )
}

const ToFollow = (
    {
        displayName,
        userName,
        verified = false,
        avatar
    }
) => {
    return (
        <div className='follow-container'>
            <Avatar name={displayName} src={avatar} />
            <div className="follow-name">
                <div className='display'>
                    <span className='displayName'>{displayName+" "}</span>
                <span className='verified'>{verified ? verifiedIcon : "" }</span>
                </div>
                <span className='username'>{' '}@{userName}</span>
            </div>
            <button className='follow'>Follow</button>
        </div>
    )
}

const FollowList = () => {
    return(
        <div className='followList-container'>
            <h3>You might like</h3>
                <ToFollow
                    verified={true}
                    userName="reactjs"
                    displayName="React"
                    avatar="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_x96.png"
                />
                <ToFollow
                    verified={true}
                    userName="code"
                    displayName="Visual Studio Code"
                    avatar="https://pbs.twimg.com/profile_images/1545098208556097536/rKXaODLl_x96.jpg"
                />
                <ToFollow
                    
                    userName="nodejs"
                    displayName="Node.js"
                    avatar="https://pbs.twimg.com/profile_images/1262824892535373825/BiXDFDDp_x96.jpg"
                />
                <a href="" className='show-more'>Show more</a>
        </div>
    )

}

const TrendsList = () => {
    return(
        <div className='followList-container'>
            <h3>Trends for you</h3>
                <Trend
                    trendName="وظايف"
                    postsNumber = {2387}
                />
                <Trend
                    trendName="#Yargı"
                    postsNumber = {22100}
                />
                <Trend
                    trendName="#رفح_تحت_القصف"
                    postsNumber = {2387}
                />
                <Trend
                    trendName="#GazaGenocide"
                    postsNumber = {20200}
                />
                <Trend
                    trendName="وزارة الصحة"
                    postsNumber = {4062}
                />
                
                <a href="" className='show-more'>Show more</a>
        </div>
    )

}

const Trend = (
    {
        trendName,
        postsNumber,

    }
) => {
    const formatNumber = (num) => {
        if (num >= 10000 && num < 100000) {
            return (num / 1000).toFixed(1) + 'K';
        } else if (num >= 100000) {
            return (num / 1000).toFixed(0).toLocaleString() + 'K';
        } else {
            return num.toLocaleString();
        }
    };

    const isArabic = /[\u0600-\u06FF]/.test(trendName);

    return (
        <div className='follow-container' dir={isArabic ?  "rtl" : "ltr" }>
            <div className="follow-name">
                <div className='display'>
                    <span className='displayName'>{trendName+" "}</span>
                </div>
                <span className='username'>{' '}{formatNumber(postsNumber)} posts</span>
            </div>
            <button className='more-left'>{dots}</button>
        </div>
    )
}
const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Accessibility</a>
                <a href="#">Ads info</a>
                <a href="#" className='footer-more'>More {dots}</a>
                <span>&copy; 2024 X Corp.</span>
            </div>
        </footer>
    );
}

function Widgets() {
  return (
    <div className='right-side'>
    <Search />
    <FollowList />
    <TrendsList />
    <Footer />
    </div>
  )
}

export default Widgets
