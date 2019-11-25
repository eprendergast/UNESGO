class CreateUserVisiteds < ActiveRecord::Migration[6.0]
  def change
    create_table :user_visiteds do |t|
      t.integer :user_id
      t.integer :site_reference_id
      t.timestamps
    end
  end
end
