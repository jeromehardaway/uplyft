Rails.application.routes.draw do
  resources :followers do
    collection do
      get 'random' => 'followers#random'
    end
  end
  resources :tweets
  devise_for :users
  root 'home#index'

  get 'profile' => 'profile#index'
  patch 'profile' => 'profile#update'


  match '*all', to: 'home#index', via: [:get]

end
