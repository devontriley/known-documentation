(function($) {

  /**
   * Airtable API
   */

  class airTableAPI {
      constructor(view) {
          var self = this;
          var app_id = 'app2LNb0dr56B6nfm';
          var app_key = 'keyuko0rluhJavuFz';
          this.items = [];

          axios.get(
              'https://api.airtable.com/v0/'+app_id+'/'+view+'?api_key=keyuko0rluhJavuFz',
              {
                  headers: {
                      Authorization: 'Bearer '+app_key
                  }
              }
          ).then(function(response){
              self.items = response.data.records;
              console.log(self.items);
              if(self.items) {
                  var outputs = '';
                  for(var i = 0; i < self.items.length; i++) {
                      var fields = self.items[i].fields;
                      for (var key in fields) {
                          if(fields.hasOwnProperty(key)){
                              outputs += '<strong>'+key+':</strong> '+fields[key]+'<br />';
                          }
                      }
                      outputs += '<br /><hr><br />';
                  }
                  contentContainer.innerHTML = '<p>'+outputs+'</p>';
              }
          }).catch(function(error){
              console.log(error);
          });
      }
  }


  /*
  Check page content for ***View Name***
   */
  var contentContainer = document.getElementById('page-content');
  var pageContent = document.getElementById('page-content').innerText;
  var patt = /[*]{3}([a-zA-Z\s]+)[*]{3}/g;
  var matches = patt.exec(pageContent);
  if(matches[1]) {
      var airTable = new airTableAPI(matches[1]);
  }

  $('#hamburger-btn').on('click', function(e){
    e.preventDefault();

    $('#main-nav').toggleClass('active');
  });

})(jQuery);
