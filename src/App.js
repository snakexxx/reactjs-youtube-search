import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import YTSearchAPI from 'youtube-api-search'

import Search from './component/search'
import ListVideo from './component/list_video'
import ListVideoItem from './component/list_video_item'
import VideoDetail from './component/video_detail'
const API_KEY = 'AIzaSyCBCuJ4XBjOhIfZFMt8SsYlocAwVyLqvPY'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos : [],
      videoSelected: null, 
      keyword: 'abc'
    }

    this.onHandleSelectVideo = this.onHandleSelectVideo.bind(this)
    this.onHandleSearchVideo = this.onHandleSearchVideo.bind(this)
  }
  onHandleSelectVideo(videoSelected, event) {
    this.setState({
      videoSelected
    })
  }

  searchVideo() {
    YTSearchAPI({key: API_KEY,term: this.state.keyword}, (videos) => {
      if(videos) {
        this.setState({
          videos : videos,
          videoSelected : videos[0]
        })
      }
    });
  }
  onHandleSearchVideo(keyword, event) {
    this.setState({
      keyword
    }, this.searchVideo)
  }

  componentWillMount() {  
    this.searchVideo()
  }
  render() {
    return (
      <div className='container'>
          <Search onSeachVideo={this.onHandleSearchVideo} />
          <div className='row'>
            <div className='col col-sm-6'>
            <VideoDetail video={this.state.videoSelected} />
            </div>
            <div className='col col-sm-6'>
              <ListVideo 
                onSelectVideo={this.onHandleSelectVideo}
                videos={this.state.videos} /> 
            </div>
          </div>
      </div>
    );
  }
}

export default App;
