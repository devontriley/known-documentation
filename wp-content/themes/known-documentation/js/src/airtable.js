class airTableAPI {
    constructor(view) {
        var self = this;
        var appID = airtable_view['app_id'];
        var view = airtable_view['view'];
        var app_key = 'keyuko0rluhJavuFz';
        this.items = [];
        var contentContainer = document.getElementById('page-content');

        axios.get(
            'https://api.airtable.com/v0/'+appID+'/'+view+'?sortField=Category&sortDirection=asc',
            {
                headers: {
                    Authorization: 'Bearer '+app_key
                }
            }
        ).then(function(response) {
            self.items = response.data.records;
            if(self.items) {
                console.log(self.items);
                var htmlContainer = document.createElement('div');
                var html = '';
                for(var i = 0; i < self.items.length; i++) {
                    var fields = self.items[i].fields;
                    for (var key in fields) {
                        if(fields.hasOwnProperty(key)){
                            html += '<strong>'+key+':</strong><br/>'+fields[key]+'<br /><br />';
                        }
                    }
                    html += '<br/><hr/><br/>';
                }
                htmlContainer.innerHTML = html;
                contentContainer.appendChild(htmlContainer);
            }
        }).catch(function(error){
            console.log(error);
        });
    }
}

var airTableInstance = new airTableAPI(airtable_view);