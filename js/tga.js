var countries = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,

  prefetch: '/api/teams/teamnames.json'
});


$('#prefetch .typeahead').typeahead(null, {
  name: 'countries',
  source: countries
});

$('.typeahead').bind('typeahead:select', function(ev, suggestion) {
  console.log('Selection: ' + suggestion);
  $.ajax({url: "/api/teams/teamnamesgeturl.json", success: function(result){
    var urls = result;

  	location.href = "/team/" + urls[suggestion][0] + "/" + urls[suggestion][1];

}});
});
