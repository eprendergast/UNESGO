class UserVisitedsController < ApplicationController
    
    def create 
        user = get_current_user
        site_reference = SiteReference.find_by(site_id: params[:site_id])
        
        new_user_visited = UserVisited.find_or_create_by(
            user_id: user.id, 
            site_reference_id: site_reference.id
        )

        if user_bucketlist = UserBucketlist.find_by(user_id: user.id, site_reference_id: site_reference.id)
            user_bucketlist.destroy!
        end

        render json: new_user_visited
    end

    def destroy
        user = get_current_user
        site_reference = SiteReference.find_by(site_id: params[:site_id])
        user_visited = UserVisited.find_or_create_by(
            user_id: user.id, 
            site_reference_id: site_reference.id
        )
        user_visited.destroy!

        render json: "Successfully destroyed"

    end

end
