import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./AppEventEmitter";

let _users = [];

class UserEventEmitter extends AppEventEmitter {
  getAll() {
    return _users;
    // .map(user => {
    //   return user;
    // });
  }
}
let UserStore = new UserEventEmitter();

AppDispatcher.register(action => {
  switch(action.actionType) {
    // case ActionTypes.RECEIVED_TWEETS:
    //   console.log(4, "TweetStore (with raw)");
    //   _tweets = action.rawTweets;
    //   TweetStore.emitChange()
    //   break;
    // case ActionTypes.RECEIVED_ONE_TWEET:
    //   _tweets.unshift(action.rawTweet);
    //   TweetStore.emitChange()
    //   break;
    default:
      // no operation
  }
});

export default UserStore;
