class SavedSitesController < ApplicationController

    def create
        user = get_current_user
        new_saved_site = SavedSite.create(
            user_id: user.id, 
            site_reference_id: params[:site_id],
            bucketlist: params[:bucketlist],
            visited: params[:visited]
        )
        render json: new_saved_site 
    end

    def update
        byebug
        user = get_current_user
        saved_site = SavedSite.find_by(id: params[:id])
        saved_site.update(params)                                  
    end

    def delete

    end

end
