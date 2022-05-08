class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.references :dog, null: false, foreign_key: true
      t.string :dog_name
      t.string :dog_breed
      t.string :dog_image
      t.string :user_name
      t.references :stylist, null: false, foreign_key: true
      t.string :stylist_name
      t.string :stylist_image
      t.string :stylist_intelligence
      t.references :service, null: false, foreign_key: true
      t.string :service_name
      t.string :service_price
      t.timestamps
    end
  end
end