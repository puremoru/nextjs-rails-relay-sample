class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :content
      t.integer :like_count

      t.timestamps
    end
  end
end
