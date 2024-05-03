import React from 'react'
import './SuggestedFollow.css'
import { verifiedIcon} from '../leftSide/icons';
import Avatar from '../Avatar';

const ToFollow = (
    {
        displayName,
        userName,
        verified = false,
        avatar,
        description
    }
) => {
    return (
        <div className='follow-container1'>
            <Avatar name={displayName} src={avatar} />
            <div className="follow-name">
                <div className='display'>
                    <span className='displayName'>{displayName+" "}</span>
                    <span className='verified'>{verified ? verifiedIcon : "" }</span>
                </div>
                <span className='username'>{' '}@{userName}</span>
                <span className='description'>{description}</span>
            </div>
            <button className='follow'>Follow</button>
        </div>
    )
}

function SuggestedFollow() {
  return (
    <div class="suggested-follow">
        <h2>Who to follow</h2>
        <ToFollow
            verified={true}
            userName="reactjs"
            displayName="React"
            avatar="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_x96.png"
            description="The library for web and native user interfaces"
        />
        <ToFollow
            verified={true}
            userName="code"
            displayName="Visual Studio Code"
            avatar="https://pbs.twimg.com/profile_images/1545098208556097536/rKXaODLl_x96.jpg"
            description="The library for web and native user interfaces"

        />
        <ToFollow
            userName="nodejs"
            displayName="Node.js"
            avatar="https://pbs.twimg.com/profile_images/1262824892535373825/BiXDFDDp_x96.jpg"
            description="The library for web and native user interfaces"
        />
        <a href="" className='show-more1'>Show more</a>
    </div>
)
}

export default SuggestedFollow
