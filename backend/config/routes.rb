Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create]
      resources :projects, only: [:index, :create, :show, :update, :destroy]

      post "/login", to: "auth#create"
    end
  end
end
