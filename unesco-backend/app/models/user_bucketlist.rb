class UserBucketlist < ApplicationRecord
    belongs_to :user 
    belongs_to :site_reference
end
