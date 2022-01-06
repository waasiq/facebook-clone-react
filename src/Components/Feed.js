import React, { useState, useEffect, query } from 'react';

//Component Import
import StoryReel from './StoryReel.js';
import MessageSender from './MessageSender.js';
import Post from './Post.js';

import '../css/Feed.css';

//! Get data from documents
import db from "../Firebase.js";
import { collection , onSnapshot } from "firebase/firestore";

function Feed() {
    const [posts, setPosts] = useState([]);

    const renderPosts = () => {
        return posts.map((post) => (               
            <Post
                key = {post.time}
                profilePic={post.profilePic}
                message= {post.message}
                timestamp = {post.time}
                username={post.username}
                image={post.image}
            />                    
        ))                 
    };

    useEffect(() => {   
        onSnapshot(collection(db, "posts"), (snapshot)=>
        {      
            var array = []
            snapshot.forEach((doc) => { 
                array.push({ ...doc.data(), time: new Date(doc.data().time.seconds).toString() })
            });

            setPosts(array);
        });
    },[]);

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />            
            {renderPosts()}           

            {/* <Post 
                profilePic = 'https://avatars.githubusercontent.com/u/72407947?v=4'
                message = 'AMK BU ORUSUPU COCUKLARINI ANASI SATAYIM'
                timestamp = '1/2/2022'
                username = 'Bzzman'
                image= 'https://media.makeameme.org/created/amna-koydum-onun.jpg'            
            /> */}
            {/* <Post 
                profilePic = 'https://avatars.githubusercontent.com/u/65101397?v=4'
                message = 'I LOVE BBC'
                timestamp = '1/2/2022'
                username = 'Hasnain Nazir'
                image= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnA-KECACfkSMN-MotWAI2R7wGsza_eXMPNA&usqp=CAU'
            /> */}
        </div>
    )
}

export default Feed
