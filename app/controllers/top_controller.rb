class TopController < ApplicationController
  def index
    gon.my_private_key = ENV['EKI_API_KEY']
  end
end
