//XXX BLOCK: simple short cuts
function l(val){
  if ( typeof(console) == 'undefined' ) {
    
  } else {
    console.log ( val )
  }
}
var jsonFlickrFeed = function ( photos ) {
  l(photos);
}


window.addEvent('domready', function(ev){
    l('sending request to flickr')
      var p = new Request.JSONP({
          url: 'http://api.flickr.com/services/feeds/photos_public.gne',
          'data': { id: '49714190@N05', 'format':'json', 'tags': 'events' }
        }).send()
    })
