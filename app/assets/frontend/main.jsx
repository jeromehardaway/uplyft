import TweetBox from './components/TweetBox';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <TweetBox />
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
