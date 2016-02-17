class TweetsController < ApplicationController
  def index
    @tweets = current_user.tweets

    respond_to do |f|
      f.html
      f.json { render json: @tweets }
    end
  end

  def create
    @tweet = current_user.tweet.create(tweet_params)

    respond_to do |f|
      f.html
      f.json {
        render json: @tweet, status: :created, location: tweet_path(@tweet)
      }
    end
  end

  private

  def tweet_params
    params.require(:tweet).permit(:body)
  end
end
