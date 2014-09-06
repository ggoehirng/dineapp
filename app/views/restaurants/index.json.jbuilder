json.array!(@restaurants) do |restaurant|
  json.extract! restaurant, :id, :name, :cuisine, :address, :neigborhood, :website, :phone_number, :description, :price_range, :color, :theme, :image, :score, :book
  json.url restaurant_url(restaurant, format: :json)
end
