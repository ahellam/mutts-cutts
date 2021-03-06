Rails.application.routes.draw do
  
  resources :appointments
  resources :services
  resources :stylists
  resources :dogs
  resources :users

  # Initially Authenticate User
  get '/authorized_user', to: 'users#show'

  # Login / Logout Routes
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  # JWT WAY.... -------------------------
  # get '/profile', to: 'users#profile'
  # post '/login', to: 'authentication#login'
  # ------------------------------------------

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
