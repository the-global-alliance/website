var countries = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,

  prefetch: '/api/v1/teamnames'
});


$('#prefetch .typeahead').typeahead(null, {
  name: 'countries',
  source: countries
});

$('.typeahead').bind('typeahead:select', function(ev, suggestion) {
  console.log('Selection: ' + suggestion);
  $.ajax({url: "/api/v1/teamnames/geturl", success: function(result){
    var urls = result;

  	location.href = "/team/" + urls[suggestion][0] + "/" + urls[suggestion][1];

}});
});
