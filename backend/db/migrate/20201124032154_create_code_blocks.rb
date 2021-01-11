class CreateCodeBlocks < ActiveRecord::Migration[6.0]
  def change
    create_table :code_blocks do |t|
      t.string :shaping
      t.string :category
      t.string :color_value
      t.string :content
      
      t.timestamps
    end
  end
end
