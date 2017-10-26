class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: this.props.videos,
      video: this.props.videos[0]
    };
  }

  // function
  test (currentVideo) {
    this.setState({
      video: currentVideo
    });
    // change state of video to video clicked
  }

  render() {

    // listen for a click on videoList on a certain video
    // call a function that changes the state
    // when the state changes in the function call
    // set the video being sent into videoPlayer

    return (

      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.props.videos} test={this.test}/>
          </div>
        </div>
      </div>
    );
  }


};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;