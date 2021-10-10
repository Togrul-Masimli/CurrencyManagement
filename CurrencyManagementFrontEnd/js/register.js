$(document).ready(function() {

    $('#btn').click(function() {
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        console.log(username);
        console.log("hello");
        $.ajax({
            type: 'POST',
            url: "https://localhost:5001/auth/register",
            dataType: 'json',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            data: JSON.stringify({
                "email": email,
                "password": password,
                "userName": username
            }),
            success: function(data) {
                console.log(data);
            }
        })
    });
});