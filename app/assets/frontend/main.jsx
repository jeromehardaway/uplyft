import Index from './components/Index'

let R = ReactDOM
let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    // // render directly... or
    // R.render(<h1>Hello World</h1>,reactNode);

    // render from a component (inline or separate file)
    R.render(<Index />, reactNode);
  }
}
$(documentReady);
