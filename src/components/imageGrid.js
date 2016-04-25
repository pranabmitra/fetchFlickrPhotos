var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/imageStore');


var Imagegrid = React.createClass({
  mixins: [Reflux.connect(ImageStore, 'imagestore')],
  render: function (){
    if (this.state.imagestore) {
      return (
        <div className="row">
         {this.state.imagestore.map(function(aImage, index){
            return (
              <div key={index} className="col-xs-6 col-sm-4 col-md-4 col-lg-3">
                <a href= {aImage.link}>
                  <img className="flickr-thumbnail" src={aImage.media.m }/>
                </a>
              </div>
            );
         })}
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
});

module.exports = Imagegrid;
