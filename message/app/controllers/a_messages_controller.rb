class AMessagesController < ApplicationController
  def index
    @current_messages = AMessage.all.order(created_at: :desc).limit(5)
  end

  # def create
  #   message = AMessage.create(message_params)
  #   ActionCable.server.broadcast 'messages', { message: message,
  #                                              user: "xiaocai" }
  #   head :ok
  # end

  private

  def message_params
    params.require(:a_message).permit(:body)
  end
end
