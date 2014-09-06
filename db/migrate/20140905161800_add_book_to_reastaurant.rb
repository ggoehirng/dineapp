class AddBookToReastaurant < ActiveRecord::Migration
  def change
  	add_column :restaurants, :book, :string
  end
end
