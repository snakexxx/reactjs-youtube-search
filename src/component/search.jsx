import React, {Component} from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: ''
        }
        this.onHandleChargeKeyword = this.onHandleChargeKeyword.bind(this)
    }

    onHandleChargeKeyword(event) {
        this.setState({
            keyword: event.target.value
        })
        if(event.key === 'Enter') {
            console.log(event.key );
            this.props.onSeachVideo(this.state.keyword)
        }
    }
    render () {
        return (
            <div>
                <input type="text" onKeyPress={this.onHandleChargeKeyword} onChange={this.onHandleChargeKeyword} className="keyword form-control" />
                <button onClick={this.props.onSeachVideo.bind(null, this.state.keyword)} className="btn btn-success">Search</button>
            </div>
        )
    }
}