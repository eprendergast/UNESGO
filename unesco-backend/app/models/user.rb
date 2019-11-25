class User < ApplicationRecord
    
    has_secure_password
    
    has_many :user_bucketlists
    has_many :user_visiteds

    def bucketlist_site_references
        self.user_bucketlists.map{ |user_bucketlist| SiteReference.find_by(id: user_bucketlist.site_reference_id) }
    end

    def bucketlist_site_ids
        self.bucketlist_site_references.map{|site_reference| site_reference.site_id }
    end

    def bucketlist_sites 
        self.bucketlist_site_ids.map{ |site_id| API.get_site(site_id)}
    end

    def visited_site_references
        self.user_visiteds.map{ |user_visited| SiteReference.find_by(id: user_visited.site_reference_id) }
    end

    def visited_site_ids
        self.visited_site_references.map{|site_reference| site_reference.site_id }
    end

    def visited_sites 
        self.visited_site_ids.map{ |site_id| API.get_site(site_id)}
    end

end
