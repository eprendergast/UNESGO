class SavedSitesController < ApplicationController

    def create
        user = get_current_user
        new_saved_site = SavedSite.create(user_id: user.id, site_reference_id: params[:site_id], status: params[:status])
        render json: new_saved_site 
    end

end
