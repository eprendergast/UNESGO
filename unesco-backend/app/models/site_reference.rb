class SiteReference < ApplicationRecord
    
    has_many :site_reference_tags
    has_many :tags, through: :site_reference_tags

    has_many :user_bucketlists 
    has_many :user_visiteds

end
