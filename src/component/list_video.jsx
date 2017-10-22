import React, {Component} from 'react' 
import ListVideoItem from './list_video_item'

export default class ListVideo extends Component {
    constructor(props) {
        super(props)    
    }
    
    render() {
        return (
            <div>
                <ul className='list-video'>
                    { this.props.videos.map(function(video) {
                        return (
                            <ListVideoItem key={video.id.videoId} onSelectVideo={this.props.onSelectVideo} video={video} />
                        )
                    }, this) }
                </ul>
            </div>
        )
    }
}