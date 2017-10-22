import React, {Component} from 'react' 

export default class VideoDetail extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                {( ! this.props.video) ? <div>Loading...</div> : 
                <div>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`} frameborder="0" allowfullscreen></iframe>
                    <h1>{this.props.video.snippet.title}</h1>
                    <h5>{this.props.video.snippet.description}</h5>
                </div>
                }
            </div>
        )
    }
}