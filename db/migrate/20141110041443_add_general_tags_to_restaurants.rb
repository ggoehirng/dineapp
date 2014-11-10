class AddGeneralTagsToRestaurants < ActiveRecord::Migration
  def change
    add_column :restaurants, :general_tags, :string
  end
end
