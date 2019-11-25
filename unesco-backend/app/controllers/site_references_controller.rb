class SiteReferencesController < ApplicationController

    def sites #returns 20 random sites
        sites = SiteReference.all.sample(10)
        site_ids = sites.map{ |site| site.site_id }
        response = site_ids.map{ |id| API.get_site(id) }
        render json: response
    end

    def site
        site = SiteReference.find_by(site_id: params[:id])
        response = API.get_site(site.site_id)
        render json: response
    end

    def search 
        response = API.search_sites(params[:query])
        render json: response.sample(4)
    end

end
