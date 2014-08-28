json.array!(@restaurants) do |restaurant|
  json.extract! restaurant, :id, :name, :cuisine, :address, :neigborhood, :website, :phone_number, :description, :price_range, :color, :theme, :score
  json.url restaurant_url(restaurant, format: :json)
end
