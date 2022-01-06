import React from 'react'
import '../css/StoryReel.css';

import Story from './Story';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
                image = 'https://livingnomads.com/wp-content/uploads/2021/09/07/Colorful-houses-on-Stortorget-square-in-Old-town-Stockholm-Sweden_960x0.jpg'
                profileSrc = 'https://avatars.githubusercontent.com/u/55933200?s=400&u=3c94d82031d228aa18774404529db20657d78d0d&v=4'
                title = 'Waasiq Masood'
            />
            <Story 
                image = 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Max_Verstappen_2017_Malaysia_FP1_1.jpg'
                profileSrc = 'https://avatars.githubusercontent.com/u/72407947?v=4'
                title = 'Eyup Barlas'
            />            
            <Story 
                image = 'https://images.stockfreeimages.com/2101/sfixl/21016526.jpg'
                profileSrc = 'https://avatars.githubusercontent.com/u/65101397?v=4'
                title = 'Hasnain Nazir'
            />
            <Story 
                image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Spiderman.JPG/1200px-Spiderman.JPG'
                profileSrc = 'https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg'
                title = 'John Doe'
            />

        </div>
    )
}

export default StoryReel
