import React , { useState } from 'react'
import '../css/MessageSender.css';

// Material UI Icons
import { Avatar } from '@mui/material';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


import { useStateValue } from '../Context/StateProvider';

//! Firebase functions
import db from "../Firebase.js";
import { collection , addDoc ,serverTimestamp  } from "firebase/firestore";
import { FirebaseError } from 'firebase/app';


function MessageSender() {
    const [input, setInput] = useState('');
    const [imageURL, setImageURL] = useState('');

    const [{user}, dispatch] = useStateValue();

    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(collection(db,'posts'), {
            message:input,
            profilePic: user.photoURL,
            time: serverTimestamp(),
            username: user.displayName,
            image: imageURL
        });

        // Database stuff
        setInput("");
        setImageURL("");
    };

    return (
        <div className='messageSender'>
            <div className="messageSender_top">
                <Avatar src={user.photoURL} />
                <form action="">
                    <input 
                        value = { input }
                        onChange = {(e) =>  setInput(e.target.value) }
                        className = 'messageSender_input'
                        type="text"
                        placeholder={`Whats on your mind , ${user.displayName}?`}
                    />

                    <input 
                        value = {imageURL}
                        onChange = { (e) => setImageURL(e.target.value) }
                        placeholder="Image URL (Optional)"
                    />
                
                    <button onClick={handleSubmit} type='submit'>
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideoCameraFrontIcon style={{ color: 'red' }} />
                    <h3>Live video</h3>
                </div>

                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/video</h3>
                </div>

                <div className="messageSender_option">
                    <EmojiEmotionsIcon style={{ color: "orange" }} />
                    <h3>Feeling/activity</h3>
                </div>           
            </div>            
        </div>
    )
}

export default MessageSender
