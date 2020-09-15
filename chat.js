/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
            $(document).ready(function(){
$('.friend-drawer--onhover').click(function(){
   $('#chat').hide('slow').show('slow');
});

    $("#message,#friend").click(function(){
         var chatHistory = document.getElementById("chat");
        chatHistory.scrollTop = chatHistory.scrollHeight;
    });
 
 
 $('#message').keypress(function(event){
 var keycode = (event.keyCode ? event.keyCode : event.which);
 if(keycode == '13'){
    // alert('You pressed a "enter" key in textbox');
    // var children = document.getElementById( "chat-message" );
     $('#chat-message').append('<div class="row float-right"><div class="col-sm-6"><div class="chat-box--right" style="">'+$('#message').val()+'</div></div></div><br><br>');
    // console.log(children);
     var chatHistory = document.getElementById("chat");
        chatHistory.scrollTop = chatHistory.scrollHeight;
        
      $('#message').val("");  
 }
  event.stopPropagation();
 });
 
   $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#friends *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
 
            
});
 