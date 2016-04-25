$(function(){
  $('#message-form').submit(function(event) {
    console.log('xiaozhua');
    event.preventDefault();
    var $messageBody = $(this).find("textarea[name='message[body]']")
    Remote.messaging.sendMessage($messageBody.val());
    $messageBody.val(null);
  });

  $(Remote.messaging).on('received', function(event, data) {
    var body = data.message.body
    var created_at = data.message.created_at
    var uid  = "uid";
    var html = ""
        html += "<li class='messages-list-item'><div class='messages-list-item-name'>"
        html += uid
        html += "</div>"
        html += "<div class='messages-list-item-body'>"
        html += body
        html += "<span class='messages-list-item-timestamp'>"
        html += created_at
        html += "</span></div></li>"

    $('#messages-list').append($(html));
  });

});
