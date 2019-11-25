class CreateBucketlists < ActiveRecord::Migration[6.0]
  def change
    create_table :bucketlists do |t|
      t.integer :user_id
      t.timestamps
    end
  end
end
