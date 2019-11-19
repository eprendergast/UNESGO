Rails.application.routes.draw do
  resources :site_reference_tags
  resources :saved_sites
  resources :site_references
  resources :tags
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
