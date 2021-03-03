Rails.application.routes.draw do

  devise_for :users
  get 'users/new'
  resources :todo_lists do
  
	resources :todo_items do
		member do
			get :index
			get :new
			delete :destroy
			post :create
			patch :complete
		end
	end
  end
  
  get 'todo_lists/:id', to: 'todo_lists#show'
  root "todo_lists#index"
  
end
