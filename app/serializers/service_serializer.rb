class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :price

  def price 
    "$#{'%.2f' % object.price}"
  end
end
