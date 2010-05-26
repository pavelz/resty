// Triphook central javascript utility library

function unscroll_el(el){
  if(el)
  {
    el.tween('height',el.getScrollSize().y)
  }
}
function unscroll(id){
  var el = $(id);
  if(el)
  {
    el.tween('height',el.getScrollSize().y)
  }
}
//XXX BLOCK: simple short cuts
function l(val){
  if(typeof(console) == 'undefined')
  {
    
  }else{
    console.log(val)
  }
}

function first_key(hash){
  for ( k in hash ){
    return k;
  }
}

function hash_keys(hash){
  var a = []
  for( k in hash ){
    a.push(k)
  }
  return a
}


// XXX BLOCK: json display code processes given json and DOM element into a new element
// that can be inserted anywhere.
// Naturally all links that follow naming convention are hooked up with event handlers.

// custom format for dates & other kinds of fields is provisioned with mapping and callbacks
// TODO: nested objects

var filter_types = {
    'date':function(text){return Date.parse(text).strftime('%d/%m/%y') }
}

// TODO: a nice delete object url handler

// clones given element, replaces text for all fields
// returns preprocessed element with json datastuffed in
// you can inject it where you want to. Kool tech, Bro


var ttk = function(record, el, mmap){
  var map = mmap;
  
  // XXX object type defined here so we can handcraft urls for editing viewing, deleting of objects
  var type = first_key(record) // by convention, as way rails formats sent Objects
  var data = record[type]
  
  if(!map) map = {};
    
  var t = el.clone() // t for template
  var v, k;
  
  for( k in data )
  {
    v  = data[k]
    
    // transform some stuff but not all
    if(typeof(map[k]) != 'undefined')
    {
      if(typeof(map[k]) == 'function')
      {
        v = map[k](v);
      }
      else
      {
        v = filter_types[map[k]](v);
      }
    }
    
    c = t.getElements('.'+k.toString()) //probably more efficient to work not off DOM...
    if(c.length > 0 && v)
    {
      c.set('text',v.toString())
    }
  }
  
  // then populate all links to be pointing towards the object.
  t.getElements('a,img').each(function(link){
      var class_str = link.get('class');
      if ( typeof(class_str) == 'string') {
        var classes = class_str.split(' ')
        classes.each(function(cls){
            // basiscally here vector_url -> object_url so we can generalize handlers.
            processed = cls.replace(type,'object')
            
            var fn = url_types[processed]
            if( fn )
            {
              fn ( link, type, data )
            }
            // type processing
            // object_url -> type + id
            // index_url -> plur(type)
            // delete_url -> type + id + delete => post? wtf how ...
            //  --- ok we need to put handler in here? lol! awesome!
            //  --- naked dom based event handler. bypass repacing any values. fucking great
            // XXX: what about nested objects?
            //  --- next iteration? -> can recurse into the object... for values !and! for links.
          })
      }
    })

  return t
}

// hooks to alter dom elements, so that they will contain valid links, that lead to valid actions.
// TODO: get all urls and buttons to be mapped through here
var url_types = {
  'object_url':function(link_el,type,record){
      var url = '/'+type+'s/'+record.id.toString()

      link_el.addEvent('click',function(ev){
          ev.stop();
          window.location.href=this;
        }.bindWithEvent(url))
    },

  'objects_url':function(link_el,type,record){
      var url = '/'+type+'s'

      link_el.addEvent('click',function(ev){
          ev.stop();
          window.location.href=this;
        }.bindWithEvent(url))
    },
    
  'delete_object_url': function(link_el, type, record ){
      var url = '/'+type+'s/'+record.id

      link_el.addEvent('click',function(ev){
          ev.stop();

          var url = this;
          var form = new Element('form', {action:url})
          var method = new Element('input',{type:'hidden',name:'_method',value:'delete'})
          
          add_auth_token(form)
          method.inject(form)

          form.inject ( $$('head')[0] )
          // XXX we expect containing element to be called type + '_template'
          form.set('send',{ onComplete:function() { link_el.getParents('.'+type+'_template')[0].tween('height',0)  } } ) // here we want to hide containing element.
          form.send()

        }.bindWithEvent(url))
    },
    'object_thumb_48':function(img_el, type, record ){ // user thumb population
      if(record['has_image?'] == true){
        img_el.set('src','/'+type+'s/thumb_48/'+record.id.toString()+'.jpg')
      } else {
        img_el.set('src','/images/user_48.png')
      }
      l(img_el)
    }

}


// Adopted from: http://www.harukizaemon.com/2008/05/javascript-date-helpers.html

function distance_of_time_in_words(from,to)
{
      distance_in_milliseconds = to - from;
      distance_in_minutes = Math.abs(distance_in_milliseconds / 60000).round();
      if (distance_in_minutes == 0) {words = "less than a minute";} 
      else if (distance_in_minutes == 1) {words = "1 minute";} 
      else if (distance_in_minutes < 45) {words = distance_in_minutes + " minutes";} 
      else if (distance_in_minutes < 90) {words = "about 1 hour";} 
      else if (distance_in_minutes < 1440) {words = "about " + (distance_in_minutes / 60).round() + " hours";} 
      else if (distance_in_minutes < 2160) {words = "about 1 day";} 
      else if (distance_in_minutes < 43200) {words = (distance_in_minutes / 1440).round() + " days";} 
      else if (distance_in_minutes < 86400) {words = "about 1 month";} 
      else if (distance_in_minutes < 525600) {words = (distance_in_minutes / 43200).round() + " months";} 
      else if (distance_in_minutes < 1051200) {words = "about 1 year";} 
      else {words = "over " + (distance_in_minutes / 525600).round() + " years";}return words;
};

Date.prototype.time_ago_in_words = function() {
  return distance_of_time_in_words(new Date(),this);
};



