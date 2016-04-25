var Reflux = require('reflux');
var ImageActions = require('../actions/imageActions');

var ImageStore = Reflux.createStore({
  listenables: [ImageActions],
  imagelist: [],
  sourceUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',

    fetchList: function() {
        $.ajax({
            url: this.sourceUrl,
            dataType: 'jsonp',
            jsonpCallback: 'jsonFlickrFeed',
            cache: false,
            context: this,
            success: function(data) {
                console.log(data);
                this.imagelist = data.items;
                this.trigger(this.imagelist);
            }
        });
    }

});

module.exports = ImageStore;
