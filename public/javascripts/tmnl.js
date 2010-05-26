window.addEvent('domready',function(){
      var face = (function(){
         var time = Date.parse('11/June/2010')
         $('countdown').set('text', "in "+distance_of_time_in_words(new Date(), time))
//         $('countdown').set('text', (new Date()).strftime("%d:%B:%Y %H:%M:%S"))
         face.delay(1000)
       });
      face.delay(1000)
      

    })

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
      else if (distance_in_minutes < 86400) {words = (distance_in_minutes / 1440).round() + " days";} 
      else if (distance_in_minutes < 86400) {words = "about 1 month";} 
      else if (distance_in_minutes < 525600) {words = (distance_in_minutes / 43200).round() + " months";} 
      else if (distance_in_minutes < 1051200) {words = "about 1 year";} 
      else {words = "over " + (distance_in_minutes / 525600).round() + " years";}return words;
};

Date.prototype.time_ago_in_words = function() {
  return distance_of_time_in_words(new Date(),this);
};



