Rails.application.routes.draw do

  resources :sie_reference_visiteds
  resources :site_reference_bucketlists
  resources :visiteds
  resources :bucketlists
  post '/signin', to: 'users#signin'
  get '/validate', to: 'users#validate'
  post 'signup', to: 'users#signup'

  get '/sites', to: 'site_references#sites'
  get '/sites/:id', to: 'site_references#site'

  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'



end
