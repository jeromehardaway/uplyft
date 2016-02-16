import Greet from './greet';

class Main extends React.Component {
  render() {
    return (
      <Greet />
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
