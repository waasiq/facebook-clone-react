import React from 'react';
import '../css/Sidebar.css';
import SidebarRow from './SidebarRow';

// ICONS For Sidebar
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow title='Waasiq Masood' src='https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png'/>
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
