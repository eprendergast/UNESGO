class RemoveStatusFromSavedSite < ActiveRecord::Migration[6.0]
  def change
    remove_column :saved_sites, :status
  end
end
