import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
// events library
import { EventEmitter } from 'events';

let _tweets = [];
const CHANGE_EVENT = "CHANGE_EVENT";

class TweetEventEmitter extends EventEmitter {
  getAll() {
    return _tweets;
  }
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
    default:
      // no operation
  }
});

export default TweetStore;
