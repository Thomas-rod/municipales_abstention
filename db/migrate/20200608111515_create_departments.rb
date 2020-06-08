class CreateDepartments < ActiveRecord::Migration[6.0]
  def change
    create_table :departments do |t|
      t.string :zip_code
      t.string :name
      t.integer :register
      t.integer :abstention
      t.integer :voters

      t.timestamps
    end
  end
end
