class TodoItemsController < ApplicationController

	before_action :set_todo_list, except: [:destroy, :complete, :edit]
	before_action :set_todo_item, except: [:create] 
	
	def index
		@todo_items = TodoItem.all
		@todo_item = TodoItem.new
	end

	def create
		@todo_item = @todo_list.todo_items.create(todo_item_params)
		redirect_to root_path
	end
	
	def edit
	end
	
	def destroy
		if @todo_item.destroy
			flash[:success] = "Todo List item was deleted."
		else
			flash[:error] = "Todo List item could not be deleted."
		end
		redirect_to root_path
	end
	
	def complete
		@todo_item.update_attribute(:completed_at, Time.now)
		redirect_to root_path, notice: "Todo item is completed."
	end
	
	private

	def set_todo_list
		@todo_list = TodoList.find(params[:todo_list_id])
	end
			
	def set_todo_item
		@todo_item = @todo_list.todo_items.find(params[:id])
	end
	
	def todo_item_params
		params[:todo_item].permit(:content)
	end
	
end
