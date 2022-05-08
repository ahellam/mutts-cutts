class Dog < ApplicationRecord
    belongs_to :user 

    has_many :appointments
    has_many :stylists, through: :appointments 
    has_many :services, through: :appointments 
end
