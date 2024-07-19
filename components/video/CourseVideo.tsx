import React from 'react'
import Video from 'next-video';
import Player from 'next-video/player';
import awesomeVideo from '@/videos/test.mp4';
const CourseVideo = () => {
  return (
    <Player
     src={"/videos/test.mp4"} 
     blurDataURL='#fff'
    poster={"/images/global/banner-2.png"}
    accentColor='#001265'/>
  )
}

export default CourseVideo