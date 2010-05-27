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

var load_albums = function(){
    var gallery_box = $('gallery_box');
    var r = new Request.JSON({
                  'url':'/albums',
                  'onSuccess': function(albums){
                    albums.each(function(album){
                      a = album.album
                      album_title = new Element('div',{'class':'fancy photos_title','text':a.name});
                      album_title.inject(gallery_box);
                      album_box = new Element('div',
                                              {
                                                'class':'gallery'
                                                }
                                            );
                      album_box.inject(gallery_box);
                      load_pictures("49714190@N05", a.flickr_tag, a.flickr_tag);
                    })
                  }
    }).get();

    Cufon.replace('.fancy',{'fontFamily':'Champagne & Limousines'} );
    console.log("WHAT");
}

window.addEvent ( 'domready', function() {
    load_albums()
})


