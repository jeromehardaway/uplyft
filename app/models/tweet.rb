class Tweet < ActiveRecord::Base
  belongs_to :user

  default_scope { order(created_at: :desc) }

  def as_json(options={})
    super(methods: [:name, :gravatar])
  end

  def name
    user.name
  end

  def gravatar
    user.gravatar
  end
end
