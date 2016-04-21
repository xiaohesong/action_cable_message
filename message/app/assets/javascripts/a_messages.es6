$(function() {
  $('#message-form').submit(function(event) {
    event.preventDefault();
    let $messageBody = $(this).find("textarea[name='message[body]']")
    console.log($messageBody.val());
    Remote.messaging.sendMessage($messageBody.val());
    $messageBody.val(null);
  });

  $(Remote.messaging).on('received', function(event, data) {
    let { body: body, created_at: createdAt } = data.message;
    let { uid } = "uid";
    let html = `<li class='messages-list-item'>
                  <div class='messages-list-item-name'>
                    ${ uid }
                  </div>
                  <div class='messages-list-item-body'>
                    ${ body }
                    <span class='messages-list-item-timestamp'>
                      ${ createdAt }
                    </span>
                  </div>
                </li>`;

    $('#messages-list').append($(html));
  });
});
