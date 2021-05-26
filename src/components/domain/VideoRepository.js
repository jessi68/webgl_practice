
export class VideoRepository {

    constructor() {
        this.videos  = []
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

    deleteVideo(video) {
        let targetIndex = this.indexOf(video)
        this.videos.splice(targetIndex, 1)
    }
}