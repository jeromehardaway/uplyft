Rails.application.routes.draw do
  devise_for :users
  root 'home#index'

  get 'profile' => 'profile#index'
end
