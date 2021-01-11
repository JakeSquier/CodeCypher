class CreateProjectCodes < ActiveRecord::Migration[6.0]
  def change
    create_table :project_codes do |t|
      t.integer :project_id
      t.string :html
      t.string :css 
      t.string :javascript

      t.timestamps
    end
  end
end
