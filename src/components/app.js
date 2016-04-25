var React = require('react');
var Reflux = require('reflux');
var Imagegrid = require('./imageGrid');
var ImageActions = require('../actions/imageActions');


var App = React.createClass({
  render: function (){
    return(
      <div className="container">
        <button onClick={ImageActions.fetchList}>Get New Flickr Photos</button>
        <hr />
        <Imagegrid />
      </div>
    )
  }
});

module.exports = App;
