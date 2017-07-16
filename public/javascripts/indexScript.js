$(document).ready(function(){
    var host = 'http://localhost:3000';
    $('.reg-form').on('submit', function(e){
        e.preventDefault();
        console.log($(".reg-form [name='username']").val());
        $.ajax({
            url: host +'/login/create',
            type: 'POST',
            data: {
                username: $(".reg-form [name='username']").val(),
                password: $(".reg-form [name='password']").val(),
                email: $(".reg-form [name='email']").val()
            },
            success: function(json){
                console.log(json);
            }
        });
    });



});
