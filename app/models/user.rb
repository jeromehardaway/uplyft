class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :tweets

  def name
    first_name.present? ? "#{first_name} #{last_name}" : email
  end

  def self.random(current_user_id)
    where(["id != :current_user_id", {current_user_id: current_user_id}])
    .order("random()")
    .all
  end
end
