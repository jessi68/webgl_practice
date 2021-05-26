import React from 'react';
import {Video} from '../components/domain/Video'
import {VideoRepository} from '../components/domain/VideoRepository'

class VideosView extends React.Component{

    constructor(props) {
        super(props)
        this.videoRepository = new VideoRepository();
        this.videoRepository.addVideo(new  Video("https://www.youtube.com/embed/Ngj3498Tm_0", "무드등", "makerJoon", "2021-03-21"));
    }
 
  //   <main class="mt-10">
  //   <section class="video-wrapper">
  //     <article class="clip">
  //       <div class="preview-container">
  //         <iframe
  //           width="100%"
  //           height="118"
  //           src="https://www.youtube.com/embed/Ngj3498Tm_0"
  //           frameborder="0"
  //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //           allowfullscreen
  //         ></iframe>
  //       </div>
  //     </article>
  //   </section>
  // </main>
    render() {

       return  <section class="video-wrapper">
         {this.videoRepository.videos.map(function(video, index) {
           return  <div class="content-container">
           <h3>{video.title}</h3>
           <div>
           <iframe
            width="100%"
            height="118"
            src={video.url}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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
          
         

      </section>
    }
}


export default VideosView;