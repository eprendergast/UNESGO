class SavedSitesController < ApplicationController

    def create
        byebug
        user = get_current_user
        SavedSite.create(user_id: "", site_reference_id: "")

    end

end
