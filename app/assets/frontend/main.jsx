import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweetsList: [] };
  }

  addTweet(newTweet) {
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: { tweet: { body: newTweet } },
      dataType: "json"
    })
    .success(tweet => {
      let newTweetsList = this.state.tweetsList;
      newTweetsList.unshift(tweet)
      // rerender using the new tweetsList state object...
      this.setState({tweetsList: newTweetsList, edit: false});
    })
    .error(error => console.log(error))
  }

  componentDidMount() {
    $.ajax({
      url: "/tweets",
      dataType: "json"
    })
    .success(data => this.setState({tweetsList: data}))
    .error(error => console.log(error))
  }

  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

let R = ReactDOM
let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    console.log(reactNode);
    // // render directly... or
    // R.render(<h1>Hello World</h1>,reactNode);

    // render from a component (inline or separate file)
    R.render(<Main />, reactNode);
  }
}
$(documentReady);
