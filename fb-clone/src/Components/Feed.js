import React from 'react';

//Component Import
import StoryReel from './StoryReel.js';
import MessageSender from './MessageSender.js';
import Post from './Post.js';

import '../css/Feed.css';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic = 'https://avatars.githubusercontent.com/u/55933200?s=400&u=3c94d82031d228aa18774404529db20657d78d0d&v=4'
                message = 'Hello World'
                timestamp = '1/2/2022'
                username = 'waas1q'
                image= 'https://www.researchgate.net/profile/Elvis-Foster/publication/320407173/figure/fig2/AS:549761205321728@1508084693737/2-C-Hello-World-Program.png'
            />
            <Post 
                profilePic = 'https://avatars.githubusercontent.com/u/72407947?v=4'
                message = 'AMK BU ORUSUPU COCUKLARINI ANASI SATAYIM'
                timestamp = '1/2/2022'
                username = 'Bzzman'
                image= 'https://media.makeameme.org/created/amna-koydum-onun.jpg'            
            />
            <Post 
                profilePic = 'https://avatars.githubusercontent.com/u/65101397?v=4'
                message = 'I LOVE BBC'
                timestamp = '1/2/2022'
                username = 'Hasnain Nazir'
                image= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnA-KECACfkSMN-MotWAI2R7wGsza_eXMPNA&usqp=CAU'
            />
        </div>
    )
}

export default Feed
