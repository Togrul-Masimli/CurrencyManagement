$(document).ready(function() {

    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();

    // $('#postbtn').click(function() {
    //     console.log(username);
    //     $.ajax({
    //         type: 'POST',
    //         url: "https://localhost:5001/auth/register",
    //         dataType: 'json',
    //         data: {
    //             email: email,
    //             password: password,
    //             username: username
    //         },
    //         success: function(data) {
    //             console.log(data);
    //         }
    //     })
    // });

    $('#postbtn').click(function() {
        console.log(username);
        $.ajax({
            type: 'GET',
            url: "https://localhost:5001/user/getall",
            dataType: 'json',
            success: function(data) {
                console.log(data);
            }
        })
    });

});