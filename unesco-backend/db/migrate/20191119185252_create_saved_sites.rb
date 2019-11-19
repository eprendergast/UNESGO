class CreateSavedSites < ActiveRecord::Migration[6.0]
  def change
    create_table :saved_sites do |t|
      t.integer :user_id
      t.integer :site_reference_id
      t.string :status
      t.timestamps
    end
  end
end
