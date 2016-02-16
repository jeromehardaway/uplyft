import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweetsList: [] };
  }

  addTweet(newTweet) {
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({id: Date.now(), name: 'Guest', body: newTweet})
    // rerender using the new tweetsList state object...
    this.setState({tweetsList: newTweetsList, edit: false});
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
