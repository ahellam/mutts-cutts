class Stylist < ApplicationRecord
    has_many :appointments
    has_many :dogs, through: :appointments
    has_many :services, through: :appointments
end
