import Tweet from "./Tweet"

class TweetList extends React.Component {
  render () {
    return (
      <div>
        <ul className="collection">
          <Tweet />
          <Tweet />
          <Tweet />
        </ul>
      </div>
    )
  }
}

export default TweetList;
