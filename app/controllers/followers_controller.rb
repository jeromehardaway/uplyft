class FollowersController < ApplicationController
  def random
    @users = User.random(current_user.id)

    respond_to do |f|
      f.html
      f.json { render json: @users }
    end
  end
end
