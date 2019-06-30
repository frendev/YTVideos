import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component{
    state={videos:[],selectedVideo:null}
    
    componentDidMount(){
        this.termSearch('hello')
    }
    onSelectVideo =(video)=>
    {
        console.log('from the app!');
        this.setState({selectedVideo:video})
    }


    termSearch= async (term)=>
    {   

        const response = await youtube.get('/search',{
            params:
            {
                part:'snippet',
                maxResults:5,
                key:'AIzaSyB1vgxmdl8K6-lPXcF3ccAg7Sj2Qb7bqfM',
                q:term
            }
        })
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        });
        console.log(this.state);
    }
    render(){
    return (
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmit={this.termSearch}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo} />
                    </div> 
                </div>
            </div>
        </div>

        )
    }
}
export default App;