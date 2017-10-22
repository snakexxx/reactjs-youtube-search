import React, {Component} from 'react' 

export default class ListVideoItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li onClick={ this.props.onSelectVideo.bind(null, this.props.video)}>
                <div>
                    <img src={this.props.video.snippet.thumbnails.default.url} />
                </div>
                <div>
                    {this.props.video.snippet.title}
                </div>
            </li>
        ) 
    }
}