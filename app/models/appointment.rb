class Appointment < ApplicationRecord
    belongs_to :dog 
    belongs_to :stylist 
    belongs_to :service 

    default_scope { order(id: :asc)}
    
end
