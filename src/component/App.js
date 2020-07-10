import React ,{ Component } from 'react';
import Projects from './Projects';
import SocialProfile from './SocialProfiles';
import ProfilePicture from '../assets/profile.png';
import Title from './Title';
import Jokes from './Joke';
import Header from './Header';
class App extends Component{
    state={bioDisplay:false};
    
        toggleDisplayBio=()=>
        {
            this.setState({ bioDisplay: !this.state.bioDisplay});
           
        }
    render()
    {
        return(
            <div>
                <img src={ProfilePicture} alt='profile' className='profile'></img>
                <h1>Hello !</h1>
                <p>My name is varsha.</p>
                {this.state.bioDisplay ? <Title/>:null}
                <p>I am always looking forward to working on meaningful projects.</p>
                { this.state.bioDisplay?(
                <div>
                    <p>I live in London, and code every day.</p>
                    <p>My Favorite language is JavaScript, and I think React Js is awesome. </p>
                    <p>Beside coding I also like to cook and watch a movie.</p>
                    <button onClick={this.toggleDisplayBio}>show less</button>
                </div>) : (<div>
                <button onClick={this.toggleDisplayBio} >Read More</button></div>)
                }
                <hr />
                <Projects />
                <hr />
            <SocialProfile />
            <hr />
            <Jokes />
            </div>
        )
    }
}

export default App;