class SiteReferencesController < ApplicationController

    def sites 
        sites = SiteReference.all
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
        site_reference = SiteReference.find_by(site_id: response["id"])
        response["tags"] = site_reference.tags.map{|tag| tag.name }
        response["saves"] = site_reference.user_bucketlists.length + site_reference.user_visiteds.length
        render json: response
    end

    def search 
        response = API.search_sites(params[:query])
        response.each do |site|
            site_reference = SiteReference.find_by(site_id: site["id"])
            site["tags"] = site_reference.tags.map{|tag| tag.name }
            site["saves"] = site_reference.user_bucketlists.length + site_reference.user_visiteds.length
        end
        render json: response
    end

    def search_by_tag
        sites = SiteReference.all.select{ |site_reference| site_reference.tags.map{|tag| tag.name.downcase }.include?(params[:tag].downcase) }
        site_ids = sites.map{ |site| site.site_id }
        response = site_ids.map{ |id| API.get_site(id) }
        
        response.each do |site|
            site_reference = SiteReference.find_by(site_id: site["id"])
            site["tags"] = site_reference.tags.map{|tag| tag.name }
            site["saves"] = site_reference.user_bucketlists.length + site_reference.user_visiteds.length
        end

        render json: response
    end

    def saves 
        site = SiteReference.find_by(site_id: params[:id])
        saves = (site.user_bucketlists.length + site.user_visiteds.length)
        render json: saves
    end

end
