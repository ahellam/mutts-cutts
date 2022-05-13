puts 'Deleting Mutts Data...'
User.destroy_all
Dog.destroy_all
Stylist.destroy_all
Service.destroy_all
Appointment.destroy_all

puts '🌱 Seeding Starting....'

# USER NEED PASSWORD
u1 = User.create!(name: "Aaron", email: "aaron@dogmail.com", admin: true, password: "password")

d1 = Dog.create!(user_id: u1.id, name: 'Dougie', breed: 'Labradoodle', image_url: 'https://images.unsplash.com/photo-1521354465180-c1ceac1d709a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')
d2 = Dog.create!(user_id: u1.id, name: 'Murphy', breed: 'Terrier', image_url: 'https://images.unsplash.com/photo-1551147239-144f237a37b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')

# German Shepard - https://images.unsplash.com/photo-1619980263701-ff2df2e12423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
# Bernese - https://images.unsplash.com/photo-1560603065-d99d67c6efe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
# Pug - https://images.unsplash.com/photo-1543320317-15188058b450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
# French Bulldog - https://images.unsplash.com/photo-1521907236370-15adf2297445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
# Corgi - https://images.unsplash.com/photo-1554692901-e16f2046918a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
# Pittbull - https://images.unsplash.com/photo-1576434795764-7e27901b7af3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80

# st1 = Stylist.create!(name: 'Lloyd', image_url: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/NINTCHDBPICT000422933541.jpg', intelligence: 'Dumb')
# st2 = Stylist.create!(name: 'Harry', image_url: 'https://i.pinimg.com/originals/9b/68/c2/9b68c2b595162ee6239212f4edd2a325.jpg', intelligence: 'Dumber')
st1 = Stylist.create!(name: 'Lloyd', image_url: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/NINTCHDBPICT000422933541.jpg')
st2 = Stylist.create!(name: 'Harry', image_url: 'https://i.pinimg.com/originals/9b/68/c2/9b68c2b595162ee6239212f4edd2a325.jpg')


se1 = Service.create!(name: 'Wash', price: 50.00)
se2 = Service.create!(name: 'Haircut', price: 100.00)
se3 = Service.create!(name: 'The Works', price: 150.00)

a1 = Appointment.create!(dog_id: d1.id, stylist_id: st1.id, service_id: se1.id, service_name: se1.name, service_price: se1.price, dog_name: d1.name, dog_image: d1.image_url, dog_breed: d1.breed, stylist_image: st1.image_url, stylist_name: st1.name, is_dumber: false)
a1 = Appointment.create!(dog_id: d2.id, stylist_id: st2.id, service_id: se3.id, service_name: se3.name, service_price: se3.price, dog_name: d2.name, dog_image: d2.image_url, dog_breed: d2.breed, stylist_image: st2.image_url, stylist_name: st2.name, is_dumber: true)

puts 'seeding COMPLETE 🌱'


# To check if this is the case,
#  shutdown your servers then open the heroku app/url, 
#  does it still work? If not then the issue is indeed your endpoints. 
#  you can fix this by making your fetch calls ‘/login’ or whatever the endpoint is and nixing the localhost:3000 part