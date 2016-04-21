class AMessagesController < ApplicationController
  def index
    @current_messages = AMessage.all
  end
end
