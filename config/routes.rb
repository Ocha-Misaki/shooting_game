Rails.application.routes.draw do
  root 'users#index'

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions',
    passwords: 'users/passwords',
    confirmations: 'users/confirmations'
  }

  resources :users, only: %i[index show] do
    resources :scores, only: %i[index create show destroy], module: :users
  end
end
