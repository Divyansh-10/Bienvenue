function initAutocomplete()
{
    let autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('search_bar'),
        {
            types : ['establishment'],
            componentRestrictions: {'country': ['US']},
            fields: ['geometry', 'name']
        });
  
}
