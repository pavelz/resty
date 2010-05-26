// Load all picture streams from flickr

function jsonFlickrFeed2(images){
  var el = $(this);
  images.items.each(function(photo){
      url = photo.media.m;
      var new_url = url.replace('_m',''); // large size of the image
      
      var img = new Element('img',{src: photo.media.m})
      var link = new Element('a',{href:new_url,rel:'lightbox'})
      link.addEvent('click',function(ev){ev.stop()})
      img.inject(link)
      link.inject( el, 'bottom' )
    });
  Slimbox.scanPage();
}

var load_pictures = function(user, tag, el_id)
{
    var el = $(el_id);
    var r = new Request.JSONP({
                url: 'http://api.flickr.com/services/feeds/photos_public.gne?size=l&format=json&id='+user.toString()+"&tags="+tag.toString() ,
                callbackKey:'jsoncallback',
                onComplete: jsonFlickrFeed2.bindWithEvent(el_id)
                }).send()
}


window.addEvent ( 'domready', function() {
  load_pictures("49714190@N05", "team", "team_photos")
  load_pictures("49714190@N05", "event", "event_photos")
  load_pictures("49714190@N05", "drink", "drink_photos")
})

