class CreateSiteReferenceBucketlists < ActiveRecord::Migration[6.0]
  def change
    create_table :site_reference_bucketlists do |t|
      t.integer :site_reference_id
      t.integer :bucketlist_id
      t.timestamps
    end
  end
end
