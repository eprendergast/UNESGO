class AddBucketlistAndVisitedColumnsToSavedSite < ActiveRecord::Migration[6.0]
  def change
    add_column :saved_sites, :bucketlist, :boolean
    add_column :saved_sites, :visited, :boolean
  end
end
