import React , { useState } from 'react'
import '../css/MessageSender.css';

// Material UI Icons
import { Avatar } from '@mui/material';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


function MessageSender() {
    const [input, setInput] = useState('');
    const [imageURL, setImageURL] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Database stuff

        setInput("");
        setImageURL("");
    };

    return (
        <div className='messageSender'>
            <div className="messageSender_top">
                <Avatar />
                <form action="">
                    <input 
                        value = { input }
                        onChange = {(e) =>  setInput(e.target.value) }
                        className = 'messageSender_input'
                        type="text"
                        placeholder={'Whats on your mind'}
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
