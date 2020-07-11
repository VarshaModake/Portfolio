import React,{Component} from 'react';

class Search extends Component{
    state={artistQuery:''};
    UpdateArtistQuery =event=>{
        this.setState({artistQuery:event.target.value});
      }
      HandleKey=event=>{
        if(event.key=='Enter')
        {
            this.SearchArtist();
        }
        }
        SearchArtist=()=>{
            console.log(this.state.artistQuery);
          this.props.SearchArtist(this.state.artistQuery);
      }
render()
{
    return(
        <div>
          <h1>Music Master</h1>
               <input 
               placeholder="Search for an Artist" 
               onChange={this.UpdateArtistQuery}
               onKeyPress={this.HandleKey}
               />
               <button onClick={this.SearchArtist}>Search</button>  
        </div>
    )
}
}
export default Search;