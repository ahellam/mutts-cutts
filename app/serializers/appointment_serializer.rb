class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :dog_id, :dog_image, :dog_name, :dog_breed, :user_name, :service_name, :service_price, :stylist_image, :stylist_name, :is_dumber #:stylist_intelligence

  def service_price 
    "#{'%.2f' % object.service.price}"
    object.is_dumber ? (object.service.price / 2) : object.service.price
  end
end
