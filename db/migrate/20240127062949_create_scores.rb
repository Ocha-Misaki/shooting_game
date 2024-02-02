class CreateScores < ActiveRecord::Migration[7.1]
  def change
    create_table :scores do |t|
      t.integer :result, null: false
      t.references :user, foreign_key: true, null: false
      t.timestamps
    end
  end
end
