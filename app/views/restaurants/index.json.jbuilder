json.array!(@restaurants) do |restaurant|
  json.extract! restaurant, :id, :name, :cuisine, :address, :neigborhood, :website, :book, :phone_number, :description, :price_range, :color, :theme, :image, :score, :featured
  json.url restaurant_url(restaurant, format: :json)
end
