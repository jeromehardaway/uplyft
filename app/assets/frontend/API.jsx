import ServerAction from "./actions/ServerActions";

export default {
  getAllTweets() {
    console.log(2, "API.$get");
    $.get({
      url: "/tweets",
      dataType: "json"
    })
    .success( rawTweets => ServerAction.receivedTweets(rawTweets) )
    .error(error => console.log(error))
  }
}
