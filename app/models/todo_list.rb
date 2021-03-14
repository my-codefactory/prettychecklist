class TodoList < ApplicationRecord
	belongs_to :user
	has_many :todo_items, -> { order(created_at: :desc) }, dependent: :destroy
end
