$(document).ready(function () {
    let cassette_list = $('#cassette-list');

    function successfulDeleteHandler(data, status, req) {
        console.log(data);
    }

    function deleteHandler() {
        $.ajax(
            '/api/cassettes',
            {method: 'delete', success: successfulDeleteHandler}
        )
    }

    $.get('/api/cassettes')
     .done(function(data) {
         for(cassette of data) {
             let _id = cassette._id;
             cassette_list.append(`<li id='li-${_id}'>${cassette.title}</li>`);

             let button = document.createElement('button');
             button.id = _id;
             button.name = `${cassette.title}`;
             button.value = `${cassette.title}`;
             button.addEventListener('click', deleteHandler);
             button.innerText = 'x';

             $(`#li-${_id}`).append(button);
         }
     })
     .fail(function() {
         alert('Error!');
     });
});