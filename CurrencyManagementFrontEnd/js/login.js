$(document).ready(function() {

    var email = $('#email').val();
    var password = $('#password').val();

    $('#postbtn').click(function() {
        console.log(username);
        $.ajax({
            type: 'POST',
            url: "https://localhost:5001/auth/login",
            dataType: 'json',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            data: JSON.stringify({
                "email": email,
                "password": password
            }),
            success: function(data) {
                console.log(data);
            }
        });
    });
});