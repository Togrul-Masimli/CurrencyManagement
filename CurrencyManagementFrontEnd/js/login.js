$(document).ready(function() {

    $('#btn').click(function() {
        var email = $('#email').val();
        var password = $('#password').val();
        console.log(email);
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