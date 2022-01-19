import React from 'react';
import './Post.css';

// Material UI Icons
import { Avatar } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function Post( {profilePic, image, username, timestamp, message }) {
    return (
        <div className='post'>
                <div className="post_top">
                    <Avatar 
                        src={profilePic} 
                        className = 'post_avatar'
                    />
                    <div className="post_topInfo">
                        <h3>{ username }</h3>
                        <p>{ timestamp }</p>
                    </div>
                </div>


                {/* Main Message of the post */}
                <div className="post_bottom">
                    <p>{ message }</p>
                </div>

                <div className="post_image">
                    {!image ? (<></>) : (<><img src={image} alt="" /></> ) }
                    
                </div>

                <div className="post_options">
                    <div className="post_option">
                        <ThumbUpAltOutlinedIcon />
                        <p>Like</p>
                    </div>
                    <div className="post_option">
                        <ChatBubbleOutlineOutlinedIcon />
                        <p>Comment</p>
                    </div>
                    <div className="post_option">
                        <ShareOutlinedIcon />
                        <p>Share</p>
                    </div>
                </div>
        </div>
    )
}

export default Post
