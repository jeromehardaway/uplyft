var TweetBox = React.createClass({
  render: function() {
    return (
      <div>
        <form>
          <textarea />
          <label>What's new?</label>
          <button>Tweet</button>
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
