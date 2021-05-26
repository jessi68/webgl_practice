import React, {useState} from 'react';
import YouTube from 'react-youtube';
import {Video} from '../domain/Video'
import {VideoRepository} from '../domain/VideoRepository'

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
  };

  const video = new Video("2E1ki61rVvE", "무드등", "makerJoon", "2021-03-21");

class VideosView extends React.Component{

    
  constructor(props) {
    super(props);
   

    this.state = { videoRepository: [] };
  }
  
   //videoRepository.addVideo(video);
    //this.props.
    //this.videoRepository.addVideo(new Video("2E1ki61rVvE", "무드등", "makerJoon", "2021-03-21"));
  
  addVideo = () => {

    this.setState((prevState, props) => ({
      videoRepository: prevState.videoRepository.concat(video)
      }));

      console.log(
        'after this: ${this.state..videoRepository}'
     );
  }
   render() {
   
    return  (<section class="video-wrapper">
    <div class="d-flex justify-center mt-5 w-100">
    <div class="w-100">
      <header class="my-4">
        <h2 class="text-center font-bold">👩🏻‍💻 나만의 유튜브 강의실 👨🏻‍💻</h2>
        <nav class="d-flex justify-center">
          <button class="btn bg-cyan-100 mx-1" onClick={this.addVideo}> 영상 추가</button>
          <button class="btn mx-1" onClick={this.addVideo}
          > 영상 삭제</button>
          <button id="search-button" class="btn mx-1">
            🔍 동영상 검색
          </button>
        </nav>
      </header>
    </div>
  </div>
  {this.state.videoRepository.map(function(video, index) {
    return  <div class="content-container">
    <h3>{video.title}</h3>
    <div>
    <YouTube
      opts={opts}
      videoId={video.id}
      onReady={(event) => event.target.pauseVideo()}></YouTube>
      <div class="meta">
        <p>{video.producer}</p>
      </div>
      <div class="d-flex justify-end">
        <button class="btn">⬇️ 저장</button>
      </div>
    </div>
  </div>
  })

  }


</section>);
  }
  
  
}


export{
   VideosView
}

