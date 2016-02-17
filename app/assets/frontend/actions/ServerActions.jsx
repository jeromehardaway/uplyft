import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';

export default {
  receivedTweets(rawTweets) {
    console.log(3, "ServerAction.receivedTweets (success)");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets: rawTweets // or ES6 rawTweets if rawTweets == rawTweets
    })
  }
}
