import React from 'react';
import VideoItem from './VideoItem'

const VideoList=({videos,onSelectVideo}) =>{
    
    const renderdList=videos.map(video=>{
        return <VideoItem key={video.id.videoId} onSelectVideo={onSelectVideo} video={video} />;
    });
    
    return <div className="ui relaxed divided list">{renderdList}</div>;
};

export default VideoList;

//RenderdList is an array containg each video object
//and since we want each object to be listed as VideoItem
//we are iterating it over and passing it as a prop to Videoitem