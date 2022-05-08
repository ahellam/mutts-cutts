class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :image_url
end
