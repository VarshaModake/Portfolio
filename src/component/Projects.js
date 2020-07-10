import React from 'react';
import PROJECTS from '../data/projects';

const Project =props=>{
    const {title,description,image,link}=props.project;
        return(
            <div style={{display:'inline-block' ,margin:10 , width: 300}}>
                <h3>{title}</h3>
                <img src={image} alt='profile' style={{width:200,height:100}} ></img>
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }

const Projects =()=>(
            <div>
                <h2>Highlighted Project</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT=>{
                            return(
                          <Project key={PROJECT.id} project={PROJECT} />
                            )
                        })
                    }
                </div>
            </div>
        )
    

export default Projects;