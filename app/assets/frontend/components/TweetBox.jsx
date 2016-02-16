var TweetBox = React.createClass({
  render: function() {
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
});
module.exports = TweetBox;


// export default class TweetBox extends React.Component {
//   render() {
//     return (
//       <div>
//         <form>
//           <textarea />
//           <label>What's new?</label>
//           <button>Tweet</button>
//         </form>
//       </div>
//     )
//   }
// }
