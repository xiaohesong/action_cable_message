class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "a_messages"
  end

  def send_message(data)
    message = AMessage.create(body: data['body'])
    ActionCable.server.broadcast 'a_messages', { message: message,
                                               user: current_user }
  end
end
