$(document).ready(function() {

    $('#postbtn').submit(function() {
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

    $('#btn1').click(function() {
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        $.ajax({
            type: 'POST',
            url: "https://localhost:5001/auth/register",
            dataType: 'json',
            contentType:'application/json',
            charset: 'utf-8',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            data: JSON.stringify({
                "email": email,
                "password": password,
                "userName": username
            }),
            // data: JSON.stringify({
            //     "email": `${email}`,
            //     "password": `${password}`,
            //     "userName": `${username}`
            // }),
            success: function(data) {
                console.log(data);
            }
        })
    })
});