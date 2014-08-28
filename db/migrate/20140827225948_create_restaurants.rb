class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :cuisine
      t.string :address
      t.string :neigborhood
      t.string :website
      t.string :phone_number
      t.string :description
      t.string :price_range
      t.string :color
      t.string :theme
      t.integer :score

      t.timestamps
    end
  end
end
