class SiteReferenceVisited < ApplicationRecord
    belongs_to :site_reference
    belongs_to :visited
end
