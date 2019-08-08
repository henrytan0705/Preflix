import React from 'react'
import VideoIndexContainer from './video_index_container'

class VideoSection extends React.Component {
    render() {
        let videosArray = Object.values(this.props.videos);
        // let trendingVideos = videosArray.filter(video => video.genre === "Trending")
        let animationVideos = videosArray.filter(video => video.genre === "Animation");
        // let animationVideos = videosArray.filter(video => video.genres.includes("Trending"));
        let foodVideos = videosArray.filter(video => video.genre === "Food");

        return (
            <div className="video-section">
                {/* {/* <h1 className="categories">Trending Now</h1> */}
                {/* <VideoIndexContainer genre="Trending" videos={trendingVideos}/> */}
                
                <h1 className="categories">Animations</h1>
                <VideoIndexContainer genre="Animation" videos={animationVideos}/>  

                <h1 className="categories">Food/Horror</h1>
                <VideoIndexContainer genre="Food" videos={foodVideos}/>
                
                <h1 className="categories">Animations</h1>
                <VideoIndexContainer genre="Animation" videos={animationVideos}/>  

            </div>
        )
    }
}

export default VideoSection;