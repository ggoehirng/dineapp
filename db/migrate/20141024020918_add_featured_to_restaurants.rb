class AddFeaturedToRestaurants < ActiveRecord::Migration
  def change
  	add_column :restaurants, :featured, :boolean
  end
end
