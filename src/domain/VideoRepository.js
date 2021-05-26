
export class VideoRepository {

    constructor(videos) {
        this.videos  = videos
    }

    /*
     @param {Video} video the object
    */
    addVideo(video) {
        this.videos.push(video);

    }

    indexOf(video) {
        return this.videos.indexOf(video);
    }

    deleteVideo(id) {
        let video = this.videos.filter(video => video.id == id);
        let targetIndex = this.indexOf(video)
        this.videos.splice(targetIndex, 1)
    }
}
