import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfile';

const Social =props=>{
   const { link, image}= props.socialProfile;
       
        return(
           <span>
              
                <a href={link}>
               <img src={image} alt='social-profile' style={{width:35, height:35 , margin:10}} /> 
               </a>
               </span>
        )
    }


const socialProfiles=()=>(
            <div>
                <h2>Connect with me !!</h2>
                <div>{
                SOCIAL_PROFILES.map(SocialProfile=>{
                return  <Social key={SocialProfile.id} socialProfile={SocialProfile} />
                })
            }
                </div>
            </div>
           
        )
    

export default socialProfiles;