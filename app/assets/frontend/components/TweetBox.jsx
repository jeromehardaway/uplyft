class TweetBox extends React.Component {
// or write as
// export default class TweetBox extends React.Component
// excluding the export line at the bottom
  render () {
    return (
      <div className="row">
        <form>
          <div className="input-field" >
            <textarea className="materialize-textarea" />
            <label>What's new?</label>
            <button className="btn right">Tweet</button>
          </div>

        </form>
      </div>
    );
  }
}
// this causes type to be of TweetBox()
export default TweetBox;

// while below results to fn()
// var TweetBox = React.createClass({
//   render: function() {
//     return (
//       <div className="row">
//         <form>
//           <div className="input-field" >
//             <textarea className="materialize-textarea" />
//             <label>What's new?</label>
//             <button className="btn right">Tweet</button>
//           </div>
//
//         </form>
//       </div>
//     );
//   }
// });
// module.exports = TweetBox;
