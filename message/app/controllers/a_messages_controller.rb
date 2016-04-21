class AMessagesController < ApplicationController
  def index
    # binding.pry
    @message = AMessage.new()
    @current_messages = AMessage.all
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
