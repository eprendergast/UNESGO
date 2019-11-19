class CreateSiteReferences < ActiveRecord::Migration[6.0]
  def change
    create_table :site_references do |t|
      t.integer :site_id
      t.timestamps
    end
  end
end
