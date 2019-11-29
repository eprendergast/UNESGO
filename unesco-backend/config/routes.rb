Rails.application.routes.draw do

  resources :user_visiteds
  resources :user_bucketlists
  resources :sie_reference_visiteds
  resources :site_reference_bucketlists
  resources :visiteds
  resources :bucketlists

  post '/signin', to: 'users#signin'
  get '/validate', to: 'users#validate'
  post 'signup', to: 'users#signup'

  get '/sites', to: 'site_references#sites'
  get '/sites/:id', to: 'site_references#site'
  get '/sites/search/:query', to: 'site_references#search'
  get '/sites/search_by_tag/:tag', to: 'site_references#search_by_tag'

  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'

  get '/users/:id/bucketlist', to: 'users#bucketlist' # returns all site details for the bucketlist
  get '/users/:id/visited', to: 'users#visited' #returns all site objects which have been visited
  
  get '/users/:id/bucketlist_site_ids', to: 'users#bucketlist_site_ids'
  get '/users/:id/visited_site_ids', to: 'users#visited_site_ids'

  post '/user_bucketlists', to: 'user_bucketlists#create'
  post '/user_visiteds', to: 'user_visiteds#create'

  delete '/user_bucketlists', to: 'user_bucketlists#destroy'
  delete '/user_visiteds', to: 'user_visiteds#destroy'

  get '/tags', to: 'tags#index'

end
