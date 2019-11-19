class SiteReference < ApplicationRecord

    has_many :saved_sites
    has_many :site_reference_tags

end
