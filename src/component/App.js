import React ,{ Component } from 'react';
import Artist from './Artist';
import Track from './Tracks';
import Search from './Search';

const API_ADDRESS=['https://spotify-api-wrapper.appspot.com'];
class App extends Component{
    state={artist:null ,tracks:[]};
 componentDidMount()
 {
     this.SearchArtist('pentatonix');
 }
SearchArtist=artistQuery=>{
  console.log(artistQuery);
   fetch(`${API_ADDRESS}/artist/${artistQuery}`)
   .then(response=>response.json())
   .then(json=>{
       if(json.artists.total>0)
       {
        const artist=json.artists.items[0];
        this.setState({artist});

        fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
        .then(response=>response.json())
        .then(json=>this.setState({tracks:json.tracks}))
        .catch(error=>alert(error.message));
       }
       
     
    fetch(`${API_ADDRESS}/artist/$`)

    })
    .catch(error=>alert(error.message))
}

    render()
    {
        return(
            <div>
               <Search SearchArtist={this.SearchArtist}/>
               <Artist artist={this.state.artist}/>
                <Track tracks={this.state.tracks}/>
            </div>
        ) 
    }
}

export default App;