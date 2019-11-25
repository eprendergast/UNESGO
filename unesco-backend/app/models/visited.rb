class Visited < ApplicationRecord
    belongs_to :user
    has_many :site_reference_visiteds
    has_many :site_references, through: :site_reference_visiteds
end
