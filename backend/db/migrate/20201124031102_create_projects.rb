class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.integer :user_id
      t.string :project_name
      t.string :html
      t.string :css
      t.string :javascript
      t.string :theme

      t.timestamps
    end
  end
end
