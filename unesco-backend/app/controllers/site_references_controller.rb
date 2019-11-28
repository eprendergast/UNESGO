class SiteReferencesController < ApplicationController

    def sites 
        sites = SiteReference.all.sample(25)
        site_ids = sites.map{ |site| site.site_id }
        response = site_ids.map{ |id| API.get_site(id) }
        
        response.each do |site|
            site_reference = SiteReference.find_by(site_id: site["id"])
            site["tags"] = site_reference.tags.map{|tag| tag.name }
        end

        render json: response
    end

    def site
        site = SiteReference.find_by(site_id: params[:id])
        response = API.get_site(site.site_id)
        render json: response
    end

    def search 
        byebug
        response = API.search_sites(params[:query])
        render json: response
    end

    def search_by_tag
        sites = SiteReference.all.select{ |site_reference| site_reference.tags.map{|tag| tag.name }.include?(params[:tag]) }
        site_ids = sites.map{ |site| site.site_id }
        response = site_ids.map{ |id| API.get_site(id) }
        
        response.each do |site|
            site_reference = SiteReference.find_by(site_id: site["id"])
            site["tags"] = site_reference.tags.map{|tag| tag.name }
        end

        render json: response.sample(25)

    end

end
