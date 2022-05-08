class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :dog_image, :dog_name, :dog_breed, :user_name, :service_name, :service_price, :stylist_image, :stylist_name, :stylist_intelligence

  def service_price 
    "#{'%.2f' % object.service.price}"
  end
end
