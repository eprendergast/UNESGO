class CreateSiteReferenceTags < ActiveRecord::Migration[6.0]
  def change
    create_table :site_reference_tags do |t|
      t.integer :site_reference_id
      t.integer :tag_id
      t.timestamps
    end
  end
end
