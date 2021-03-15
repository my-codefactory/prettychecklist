Rails.application.routes.draw do

  devise_for :users
  get 'users/new'
  resources :todo_lists, shallow: true do
	resources :todo_items, shallow: true do
		member do
			patch :complete
			get :index
		end
	 end
  end
  
  root "todo_lists#index"
  
end
