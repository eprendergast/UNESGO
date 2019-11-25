class Bucketlist < ApplicationRecord
    belongs_to :user
    has_many :site_reference_bucketlists
    has_many :site_references, through: :site_reference_bucketlists
end
