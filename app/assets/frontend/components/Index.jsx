import React from 'react';
import TweetBox from './TweetBox';
import TweetList from './TweetList';
import TweetStore from '../stores/TweetStore';

import TweetActions from "../actions/TweetActions";
console.log(0, "Main Entry Point");
TweetActions.getAllTweets()

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState(); //{ tweetsList: [] };
    this._onChange = this._onChange.bind(this);
  }

  // Moved to TweetStore.getAll()
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
    TweetStore.addChangeListener(this._onChange);
    // $.ajax({
    //   url: "/tweets",
    //   dataType: "json"
    // })
    // .success(data => this.setState(this.formattedTweets(data)))
    // .error(error => console.log(error))
  }

  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    console.log(5, "Main._onChange");
    this.setState(getAppState());
  }

  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

export default Index;
