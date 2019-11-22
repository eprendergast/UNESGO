Rails.application.routes.draw do

  post '/signin', to: 'users#signin'
  get '/validate', to: 'users#validate'
  post 'signup', to: 'users#signup'

  get '/sites', to: 'site_references#sites'
  get '/sites/:id', to: 'site_references#site'

  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  get '/users/:id/saved', to: 'users#saved'

  post '/saved_sites', to: 'saved_sites#create'


end
