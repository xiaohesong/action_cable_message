class CreateAMessages < ActiveRecord::Migration
  def change
    create_table :a_messages do |t|
      t.string :body

      t.timestamps null: false
    end
  end
end
