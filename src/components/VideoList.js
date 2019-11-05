import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {
  const videoRender = videos.map(item => {
    return <VideoItem key={item.id.videoId || item.id.playlistId} onVideoSelect={onVideoSelect} video={item} />
  })
  
  return (
    <div className="ui divided list">{ videoRender }</div>
  );
}

export default VideoList;