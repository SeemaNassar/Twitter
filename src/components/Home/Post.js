import React from 'react';
import '../Home/Home.css'
import './Post.css';
import '../leftSide/leftSide.css'
import Avatar from '../Avatar';
import {verifiedIcon ,likes, share ,viewers ,comments, retweets, save} from '../leftSide/icons'

const TextWithLinks = ({ text }) => {
    // Split text into paragraphs based on newline characters
    const paragraphs = text.split('\n').map((paragraph, index) => {
        // Split paragraph into parts separated by "@" for potential links
        const parts = paragraph.split(/(@\w+)/);

        // Render paragraph with links
        return (
            <p key={index}>
                {parts.map((part, index) => {
                    // Check if part starts with "@" (potential link)
                    if (part.startsWith('@')) {
                        return (
                            <a 
                                key={index} 
                                href={`/${part.substring(1)}`} 
                                style={{ color: '#2F9BF0', textDecoration: 'none' }}
                                onMouseEnter={(e) => { e.target.style.textDecoration = 'underline'; }}
                                onMouseLeave={(e) => { e.target.style.textDecoration = 'none'; }}
                            >
                                {part}
                            </a>
                        );
                    } else {
                        return part;
                    }
                })}
            </p>
        );
    });

    return (
        <div>
            {paragraphs}
        </div>
    );
}; 

function Post({
    displayName,
    userName,
    verified = false,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
        <div className="avatar-container"> 
            <Avatar name='reeact' src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_x96.png" />
        </div>
        <div className="post_body">
            <div className="post_header">
                <div className="post_headerText">
                    <h3>
                        {displayName+" "}
                        <span className='verified'>
                        {verified ? verifiedIcon : "" }</span>
                        
                        <span className='username'>{' '}@{userName}</span >
                        
                    </h3>
                </div>
                <div className="postDescription">
                    <TextWithLinks text={text} /> 
                </div>
                <img alt={displayName} src={image}></img>
                <div className="post_footer">
                    <div className="comment">
                        <div>{comments}</div>
                         <span>46</span>
                    </div>
                    <div className="retweet">
                        <div> {retweets}</div>
                        <span>675</span>
                    </div>
                    <div className="like">
                        <div>{likes}</div> <span>3.701</span>
                    </div>
                    <div className="viewer">
                       <div>{viewers}</div>  <span>1.1M</span>
                    </div>
                    <div className="more_action">
                        <div className="save">{save}</div>
                        <div className="share">{share}</div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
