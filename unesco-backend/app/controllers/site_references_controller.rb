class SiteReferencesController < ApplicationController

    def sites #returns 20 random sites
        sites = SiteReference.all.sample(20)
        site_ids = sites.map{ |site| site.site_id }
        response = site_ids.map{ |id| API.get_site(id) }
        render json: response
    end

end
