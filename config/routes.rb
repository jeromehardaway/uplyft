Rails.application.routes.draw do
  resources :tweets
  devise_for :users
  root 'home#index'

  get 'profile' => 'profile#index'
  patch 'profile' => 'profile#update'
end
