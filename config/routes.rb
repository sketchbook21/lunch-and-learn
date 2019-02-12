Rails.application.routes.draw do
  root 'users#index'
  devise_for :users, controllers: { registrations: "registrations" }


  resources :users, only: [:index, :show, :edit]
  resources :events, only: [:show, :new, :edit]
  resources :caterers, only: [:create]


  namespace :api do
    namespace :v1 do
      resources :users, only: [:show]
      resources :events, only: [:show, :edit, :create, :update]
      get "/restaurants/search", to: "restaurants#search"
    end
  end
end
