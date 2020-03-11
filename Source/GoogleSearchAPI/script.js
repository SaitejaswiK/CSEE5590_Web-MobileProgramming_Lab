
function getInfo(user) {
    var username = user;
    var service_url = 'https://kgsearch.googleapis.com/v1/entities:search';
    var params = {
        'query': username,
        'limit': 1,
        'indent': true,
        'key': '<API-Key>',
    };


    $.getJSON(service_url + '?callback=?', params, function(response) {
        $.each(response.itemListElement, function(i, element) {
            var outhtml;
            outhtml = '<h2><strong>Search result</strong></h2>';
            outhtml = outhtml+ '<h2>' + element['result']['name'] + '</h2>';
            outhtml = outhtml + '<p>' + element['result']['description'] + '</p>';
            outhtml = outhtml + '<p>' + element ['result']['detailedDescription']['articleBody'] + '</p>';
            outhtml = outhtml + '<form action = "'+element['result']['url'] + '">' +
                '<button type = "submit" class = "btn btn-primary"> More info </button>';

            $('#profile').html(outhtml);
        });
    });
};

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            getInfo(username);
        }
    })
});
