import React from 'react';
import "./css/Header.css";

// Icons for the Header mid
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StoreIcon from '@mui/icons-material/Store';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

// Icons for header right
import { Avatar } from "@mui/material"
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {
    return (
        <div className='header'>
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                     alt="logo"
                />   

                <div className="header_input ">
                    <SearchIcon /> 
                    <input type="text" placeholder='Search Facebook'/>
                </div>
            </div> 

         

            <div className="header_center">
                <div className="header_option header_option--active">
                    <HomeIcon fontSize="large" />
                </div>

                <div className="header_option">
                    <FlagIcon fontSize="large" />
                </div>

                <div className="header_option">
                    <SubscriptionsIcon fontSize="large" />
                </div>
                
                <div className="header_option">
                    <StoreIcon fontSize="large" />
                </div>
                
                <div className="header_option">
                    <SportsEsportsIcon fontSize="large" />
                </div>                
            </div>
                
            <div className="header_right">
                <div className="header_info">
                    <Avatar src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"/>
                    <h4>Waasiq Masood</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
                

            </div>
        </div>
    )
}

export default Header
