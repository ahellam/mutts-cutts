class User < ApplicationRecord
    has_secure_password

    has_many :dogs 
    has_many :appointments, through: :dogs

    validates :name, presence: true, uniqueness: true
    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
    validate :permitted_emails

    def permitted_emails
        unless email.match?(/dogmail.com|barkmail.com|woofmail.com/)
            errors.add(:permitted_emails, "Sorry, that email isn't permitted. Must be @dogmail, @barkmail, or @woofmail.com")
        end
    end 
end
