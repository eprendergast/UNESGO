class Tag < ApplicationRecord

    has_many :site_reference_tags
    has_many :site_references, through: :site_reference_tags
    
end
