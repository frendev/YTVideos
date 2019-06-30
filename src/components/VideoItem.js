import './VideoItem.css';
import React from 'react';

const VideoItem=({video,onSelectVideo})=>{
        return (
            <div className="video-item item">
                <img className="ui image" alt={video.snippet.title} onClick={()=>onSelectVideo(video)} src={video.snippet.thumbnails.medium.url}>
                </img>
                <div className="content">
                    <div className="header">
                        {video.snippet.title}
                    </div>
                </div>
                
            </div>
            )
}


export default VideoItem;