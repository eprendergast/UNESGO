class CreateSiteReferenceVisiteds < ActiveRecord::Migration[6.0]
  def change
    create_table :site_reference_visiteds do |t|
      t.integer :site_reference_id 
      t.integer :visited_id
      t.timestamps
    end
  end
end
