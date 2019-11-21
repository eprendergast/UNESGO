Rails.application.routes.draw do

  post '/signin', to: 'users#signin'
  get '/validate', to: 'users#validate'
  post 'signup', to: 'users#signup'

  get '/sites', to: 'site_references#sites'

  get '/users', to: 'users#index'

end
