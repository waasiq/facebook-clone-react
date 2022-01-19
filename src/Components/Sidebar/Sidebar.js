import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

// ICONS For Sidebar
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

import { useStateValue } from '../../Context/StateProvider';

function Sidebar() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className='sidebar'>
            <SidebarRow 
                title={user.displayName} 
                src={user.photoURL}
            />
            
            <SidebarRow 
                title= 'Friends'
                Icon ={GroupIcon} 
            />
            
            <SidebarRow 
                title= 'Groups'
                Icon= {GroupsIcon}
            />

            <SidebarRow 
                title= 'Marketplace'
                Icon= {StoreIcon}
            />
            
            <SidebarRow 
                title= 'Watch'
                Icon = {VideoLibraryIcon}
            />
        </div>
    )
}

export default Sidebar
