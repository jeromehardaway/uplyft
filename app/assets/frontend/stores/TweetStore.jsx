import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
// events library
import { EventEmitter } from 'events';

let _tweets = [];
const CHANGE_EVENT = "CHANGE_EVENT";

class TweetEventEmitter extends EventEmitter {
  getAll() {
    return _tweets.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    });
  }
  // EventEmitter functions
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}
let TweetStore = new TweetEventEmitter();

AppDispatcher.register(action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
      console.log(4, "TweetStore (with raw)");
      _tweets = action.rawTweets;
      TweetStore.emitChange()
      break;
    case ActionTypes.RECEIVED_ONE_TWEET:
      _tweets.unshift(action.rawTweet);
      TweetStore.emitChange()
      break;
    default:
      // no operation
  }
});

export default TweetStore;
