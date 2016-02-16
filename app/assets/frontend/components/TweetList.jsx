class TweetList extends React.Component {
  render () {
    return (
      <div>
        <ul className="collection">
          <li className="collection-item avatar">
            <i className="material-icons circle">person_pin</i>
            <span className="title">James Linus</span>
            <p>This is cool!</p>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle">person_pin</i>
            <span className="title">Eric Conde</span>
            <p>So awesome</p>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle">person_pin</i>
            <span className="title">Jane Doe</span>
            <p>I concur!</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default TweetList;
