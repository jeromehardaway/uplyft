import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';
import TweetStore from './stores/TweetStore';

import TweetActions from "./actions/TweetActions";
TweetActions.getAllTweets()

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweetsList: [] };

  }

  // formattedTweets(newTweetList) {
  //   let formattedTweetList = newTweetList.map(tweet => {
  //     tweet.formattedDate = moment(tweet.created_at).fromNow();
  //     return tweet;
  //   })
  //
  //   return {
  //     tweetsList: formattedTweetList
  //   };
  // }

  addTweet(newTweet) {
    // $.ajax({
    //   url: "/tweets",
    //   method: "POST",
    //   data: { tweet: { body: newTweet } },
    //   dataType: "json"
    // })
    // .success(tweet => {
    //   let newTweetsList = this.state.tweetsList;
    //   newTweetsList.unshift(tweet)
    //   // rerender using the new tweetsList state object...
    //   this.setState(this.formattedTweets(newTweetsList));
    // })
    // .error(error => console.log(error))
  }

  componentDidMount() {
    // $.ajax({
    //   url: "/tweets",
    //   dataType: "json"
    // })
    // .success(data => this.setState(this.formattedTweets(data)))
    // .error(error => console.log(error))
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
    // // render directly... or
    // R.render(<h1>Hello World</h1>,reactNode);

    // render from a component (inline or separate file)
    R.render(<Main />, reactNode);
  }
}
$(documentReady);
