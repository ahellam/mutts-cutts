class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name 
      t.string :breed
      t.string :image_url
      t.timestamps
    end
  end
end
