class Service < ApplicationRecord
    has_many :appointments
    has_many :dogs, through: :appointments
    has_many :stylists, through: :appointments
end
