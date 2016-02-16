import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

let mockTweets = [
  { id: 1, name: 'John Doe', body: 'Cool Tweet Feed! #1' },
  { id: 2, name: 'Sarah Olah', body: 'Cool Tweet Feed! #2' },
  { id: 3, name: 'Linus Pharaoh', body: 'Cool Tweet Feed! #3' },
]


class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetList tweets={mockTweets} />
      </div>
    );
  }
}


let R = ReactDOM
let documentReady = () => {
  R.render(
    // <h1>Hello World</h1>, // <= render directly... or
    <Main />, // render from a component (inline or separate file)
    document.getElementById('react')

  )
}
$(documentReady);
