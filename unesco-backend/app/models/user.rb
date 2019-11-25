class User < ApplicationRecord
    
    has_secure_password
    
    has_one :bucketlist
    has_one :visited

    has_many :site_reference_bucketlists, through: :bucketlist
    has_many :site_reference_visiteds, through: :visited

end
